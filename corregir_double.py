
with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# O padrao errado: tela:"6.43\" AMOLED\",
# Tem duas backslashes antes da virgula
# O correto: tela:"6.43\" AMOLED",
# So tem que remover uma backslash

# Substituição direta em bytes
content = content.replace('tela:"6.43\\" AMOLED\\"', 'tela:"6.43\\" AMOLED"')

# Procurar por outros casos similares - dois \\\" seguidos
import re

# Padrao: tela:"(\d+\.?\d*)\\"([a-zA-Z ]+)\\\" (duas backslashes no fim)
def fix_double_backslash(m):
    numero = m.group(1)
    tipo = m.group(2)
    return f'tela:"{numero}\\"{tipo}"'

# Regex: find tela:"numero\" texto\"  (duas backslashes no fim antes da virgula)
fixed = 0
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'tela:' not in line:
        continue
    
    # Padrao especifico: tela:"numero\" texto\"  (duas backslashes)
    # Em regex: tela:"(\d+\.?\d*)\"([a-zA-Z ]+)\"  mas com duas backslashes no final
    # A regex: (\d+\.?\d*)\\"([a-zA-Z ]+)\\"  - duas backslashes
    
    m = re.search(r'tela:"(\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\"', line)
    if m:
        # Verificar se há duas backslashes antes da vírgula
        if '\\\\"' in line[m.start():m.end()+5]:
            old_tela = f'tela:"{m.group(1)}\\"{m.group(2)}\\"'
            new_tela = f'tela:"{m.group(1)}\\"{m.group(2)}"'
            if old_tela in line:
                line = line.replace(old_tela, new_tela)
                fixed += 1
    
    lines[i] = line

content = '\n'.join(lines)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções: {fixed}")
