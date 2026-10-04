
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed = 0
remaining = []

for i, line in enumerate(lines):
    if not line.strip().startswith(',{'):
        continue
    
    # Padrao: tela:"5" FHD Super AMOLED" onde a aspa interna nao esta escapada
    # Regex mais generico: tela:"(\d+\.?\d*)" qualquer_coisa" 
    # Onde a aspa apos o numero nao tem backslash
    
    # Encontrar todos os campos tela:"..."    
    # Pattern: tela:" numero-aspa-sem-backslash espacos texto-aspa-final
    # A aspa interna que esta sendo interpretada como fim de string é apos o numero
    
    m = re.search(r'tela:"(\d+\.?\d*)"([^"]*)"\,', line)
    # Group 1: tamanho, Group 2: o texto entre a aspa "errada" e a aspa final
    # Mas isso não captura direito...
    
    # Tentativa 2: a aspa interna nao esta escapada -> a string acaba prematuramente
    # tela:"5" FHD Super AMOLED" -> A string e "5" (termina no 2o caracter ")
    # Depois vem " FHD Super AMOLED" que nao faz parte do campo
    
    # O padrao real: ",{...,tela:"5" FHD Super AMOLED",...}"
    # Apos fixar: ",{...,tela:"5\" FHD Super AMOLED",...}"
    
    # Encontrar occorrencias onde " aparece dentro de tela:"..." sem ser um escape
    # Pattern: tela:"(\S+)" sem o backslash
    
    # Regex para encontrar o problema: linha tem ",{score:" e tela:"N" Tipo"
    # A segunda aspa (apos o N) nao tem backslash
    
    m2 = re.search(r'tela:"(\d+\.?\d*)"(\s*[a-zA-Z][a-zA-Z0-9+ ]*)"\,', line)
    if m2:
        tamanho = m2.group(1)
        tipo = m2.group(2).strip()
        old = f'tela:"{tamanho}" {tipo}"'
        new = f'tela:"{tamanho}\\" {tipo}"'
        if old in line:
            line = line.replace(old, new)
            fixed += 1
        else:
            remaining.append((i+1, line[:120]))

content = '\n'.join(lines)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções: {fixed}")
if remaining:
    print(f"Ainda restam {len(remaining)} linhas:")
    for lin, txt in remaining[:5]:
        print(f"  Lin {lin}: {txt}")
