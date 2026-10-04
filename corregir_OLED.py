
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed = 0

# Correcao direta: substituir "tela:\"X\" AMOLED\"\"" por "tela:\"X\" AMOLED\""
# O padrao errado tem duas backslashes antes da virgula: \\\"\,
# O correto tem uma: \"\,

for i, line in enumerate(lines):
    if not line.strip().startswith(',{'):
        continue
    
    # Padrao especifico: tela:"<numero>\" <tipo>\"\"  (duas backslashes no fim)
    # Regex: tela:"(\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*(?: [a-zA-Z0-9+ ]*)*)\\"\,
    # Isso captura: 1=numero, 2=tipo
    # E o padrao todo e: tela:"<num>\"<tipo>\"",
    
    # Mas o problema e que o texto tem: tela:"6.43\" AMOLED\"",
    # Ou seja: tela:"6.43\" AMOLED\"", (duas backslashes antes da virgula)
    
    # Correcao: substituir diretamente
    # Pattern: (\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\"\,
    # Substituir por: \\1\\"\\2"\,
    
    old_pattern = r'(\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\"\,'
    new_pattern = r'\1\\"\2",'
    
    def fix_match(m):
        global fixed
        fixed += 1
        return f'{m.group(1)}\\"{m.group(2)}",'
    
    line = re.sub(r'(\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\"\,', fix_match, line)
    lines[i] = line

content = '\n'.join(lines)

# Verificar o resultado
for i, line in enumerate(lines):
    if 'tela:"6.43' in line:
        print(f"Linha {i+1}: {line[:150]}")

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções: {fixed}")
