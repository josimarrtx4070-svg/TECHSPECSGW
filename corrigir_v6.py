
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed = 0

for i, line in enumerate(lines):
    if 'tela:' not in line:
        continue
    
    # Padrao com duas backslashes no fim: tela:"X\" Tipo\"  
    m1 = re.search(r'(\d+\.?\d*)\"([a-zA-Z0-9+ ]*)\"', line)
    if m1:
        old_tela = f'tela:"{m1.group(1)}\\"{m1.group(2)}\\"'
        new_tela = f'tela:"{m1.group(1)}\\"{m1.group(2)}"'
        if old_tela in line:
            line = line.replace(old_tela, new_tela)
            fixed += 1
            continue
    
    # Padrao sem escape: tela:"X Tipo"  
    m2 = re.search(r'tela:"(\d+\.?\d*)"([a-zA-Z0-9+ ]+)"', line)
    if m2:
        old_tela = f'tela:"{m2.group(1)}"{m2.group(2)}"'
        new_tela = f'tela:"{m2.group(1)}\\"{m2.group(2)}"'
        if old_tela in line:
            line = line.replace(old_tela, new_tela)
            fixed += 1

    lines[i] = line

content = '\n'.join(lines)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções: {fixed}")
