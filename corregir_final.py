
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed = 0
errors = []

for i, line in enumerate(lines):
    if not line.strip().startswith(',{'):
        continue
    
    # Padrao 1: tela:"X\" AMOLED\""  (duas backslashes, uma a mais)
    # Corrigir para: tela:"X\" AMOLED"
    # Pattern: tela:"(\d+\.?\d*)\\"([a-zA-Z ]+)\\\"\,(.*)
    # Isso captura o tamanho, o tipo, e o resto da linha com a virgula
    
    m1 = re.search(r'tela:"(\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*(?: [a-zA-Z0-9+ ]*)*)\\"\,', line)
    if m1:
        tamanho = m1.group(1)
        tipo = m1.group(2)
        # O padrao tem du%%as backslashes antes da virgula: \\\"\,
        # Queremos apenas um backslash: \"\,
        old = f'tela:"{tamanho}\\"{tipo}\\"'
        new = f'tela:"{tamanho}\\"{tipo}"'
        if old in line:
            line = line.replace(old, new)
            fixed += 1
    
    # Padrao 2: tela:"X" Tipo"  (aspa interna sem escape)
    m2 = re.search(r'tela:"(\d+\.?\d*)"(\s*)([a-zA-Z][a-zA-Z0-9+ ]*(?: [a-zA-Z0-9+ ]*)*)"\,', line)
    if m2:
        tamanho = m2.group(1)
        espacos = m2.group(2)
        tipo = m2.group(3)
        old = f'tela:"{tamanho}"{espacos}{tipo}"'
        new = f'tela:"{tamanho}\\"{espacos}{tipo}"'
        if old in line:
            line = line.replace(old, new)
            fixed += 1
    
    lines[i] = line

content = '\n'.join(lines)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções totais: {fixed}")
