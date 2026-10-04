
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Corrigir padrão: tela:"5" FHD..." ou tela:"5.7" FHD..."
# O problema: tela:"5" FHD Super AMOLED" -> a aspa depois do tam⟹anho nao esta escapada
# Corrigir para: tela:"5\" FHD Super AMOLED"

# Padrao: ",tela:"numero" espacos+letras" (a aspa interna nao esta escapada)
# Regex: procura por tela:"<digitos+\.?>" <letras>" onde a aspa interna é problema
# Mais específico: tela:"(\d+\.?\d*)" ([A-Za-z0-9+ ]+)"  -> 
# Esta regex captura o tamanho e o tipo, e a aspa que fecha o tamanho nao esta escapada

# Vou fazer uma correção mais segura: linhas que começam com ",{score: e têm   
# tela:"X" YYY" onde a segunda aspa (depois do numero) nao tem backslash

lines = content.split('\n')
fixed = 0

for i, line in enumerate(lines):
    if not line.strip().startswith(',{'):
        continue
        
    # Procurar padrão tela:"<numero>" <tipo>" sem escape
    # Regex: tela:"(\d+\.?\d*)" ([a-zA-Z0-9+ ]+)"(?=,)
    # O grupos: 1=tamanho, 2=tipo
    m = re.search(r'tela:"(\d+\.?\d*)" ([a-zA-Z0-9+ ]+)"(?=,)', line)
    if m:
        tamanho = m.group(1)
        tipo = m.group(2)
        old = f'tela:"{tamanho}" {tipo}"'
        new = f'tela:"{tamanho}\\" {tipo}"'
        if old in line:
            line = line.replace(old, new)
            fixed += 1

content = '\n'.join(lines)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções: {fixed}")
