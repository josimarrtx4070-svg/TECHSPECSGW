
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed = 0

for i, line in enumerate(lines):
    # Padrao exato: ",{...,tela:"5" FHD Super AMOLED",...}"
    # A aspa apos o numero (5") nao esta escapada
    
    # Regex: encontra "tela:" seguido de numero, aspa, espacos, texto, aspa-final
    # A aspa interna (apos o numero) nao tem backslash -> e o problema
    
    # Pattern: tela:"<digitos>"<espacos><letras>"
    # Usar re.sub com uma função para substituir
    
    def fix_tela(m):
        global fixed
        fixed += 1
        numero = m.group(1)
        espacos = m.group(2)
        tipo = m.group(3)
        return f'tela:"{numero}\\"{espacos}{tipo}"'
    
    # Padrao: tela:"(\d+\.?\d*)"(\s*)([a-zA-Z][a-zA-Z0-9+ ]*)\"
    # Captura: 1=numero, 2=espacos entre as duas aspas, 3=o texto do tipo
    line = re.sub(r'tela:"(\d+\.?\d*)"(\s*)([a-zA-Z][a-zA-Z0-9+ ]*)"\,', fix_tela, line)
    lines[i] = line

content = '\n'.join(lines)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções: {fixed}")
