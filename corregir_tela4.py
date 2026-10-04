
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed = 0
comma_missing = 0

for i, line in enumerate(lines):
    # Padrao: tela:"5\" FHD Super AMOLED"ano:"2017"  (falta a virgula)
    # Regex: encontra "tela:"..."..." seguido de "ano:" sem virgula
    
    # Pattern: tela:"...<tipo>"ano:
    m = re.search(r'tela:"(\d+\.?\d*)\\"(\s*)([a-zA-Z][a-zA-Z0-9+ ]*)"(\s*)(ano:)', line)
    if m:
        # Restaura a virgula
        old = f'tela:"{m.group(1)}\\"{m.group(2)}{m.group(3)}"{m.group(4)}{m.group(5)}'
        new = f'tela:"{m.group(1)}\\"{m.group(2)}{m.group(3)}",{m.group(5)}'
        if old in line:
            line = line.replace(old, new)
            fixed += 1
            comma_missing += 1
        else:
            # Verificar o que tem na linha
            pass
    lines[i] = line

content = '\n'.join(lines)

# Agora corrigir as aspas que ainda nao tem backslash
for i, line in enumerate(lines):
    # Padrao: tela:"5" FHD Super AMOLED" (aspa interna sem escape)
    m = re.search(r'tela:"(\d+\.?\d*)"(\s*)([a-zA-Z][a-zA-Z0-9+ ]*)"\,', line)
    if m:
        tamanho = m.group(1)
        espacos = m.group(2)
        tipo = m.group(3)
        old = f'tela:"{tamanho}"{espacos}{tipo}"'
        new = f'tela:"{tamanho}\\"{espacos}{tipo}"'
        if old in line:
            line = line.replace(old, new)
            fixed += 1
    lines[i] = line

content = '\n'.join(lines)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções: {fixed}")
print(f"Virgulas restauradas: {comma_missing}")
