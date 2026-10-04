
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

print(f"Total chars: {len(content)}")

# Padroes de erro: aspas nao escapadas em dentro de strings
# tela:"5" FHD..." onde a aspa fica errada

# Regex para encontrar linhas problemáticas - buscar por " seguido de espaco e mais chars ate virgula ou fim
# Mas precisa ser preciso

# Vou usar uma abordagem diferente: processar linha por linha
lines = content.split('\n')

fixed_count = 0
for i, line in enumerate(lines):
    # Detectar se eh uma linha de smartphone/objeto
    if '{score:' in line or 'score:' in line:
        # Contar as aspas duplas na linha
        count = line.count('"')
        if count % 2 != 0:
            print(f"Linha {i+1} tem {count} aspas (impar): {line[:100]}...")
            fixed_count += 1

print(f"Total linhas com aspa impar: {fixed_count}")
