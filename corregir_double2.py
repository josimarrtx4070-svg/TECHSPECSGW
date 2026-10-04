
with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Procurar TODOS os padroes com dois \\\" antes da virgula ou antes de outro campo
# e substituir por um so\\\"

import re

# Padrao: \" seguido de \\\" (duas backslashes) 
# Isso e: ", algo" algo\"\
# O correto e: ", algo" algo\"  (somente uma backslash)

# Vou fazer uma substituicao global
# Primeiro, os casos especificos que encontramos
content = content.replace('tela:"6.43\\" AMOLED\\"', 'tela:"6.43\\" AMOLED"')
content = content.replace('tela:"5.5\\" FHD AMOLED\\"', 'tela:"5.5\\" FHD AMOLED"')

# Agora um regex generico para achar todos os casos de \\" no meio de strings de tela
# Padrao: tela:"<algo>\\"<mais algo>\\"  (quando isso e seguido de , ou de outro campo)
# Regex: tela:"(.*?)\\"(.*?)\\"  (não é ótimo porque pode ser ambíguo)

# Melhor abordagem: achar todos os \\" que nao estao logo após outro \"
# Padrao: (\d+\.?\d*)\\"([a-zA-Z ]+)\\"  -> \\1\\"\\2" (uma backslash so)

fixed = 0
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'tela:' not in line:
        continue
    
    # Encontrar todas as occorrencias de \" na linha
    # Se houver du%%as consecutivas \\\" (duas backslashes), e uma delas nao e para escapar o anterior
    
    # Pattern: tela:"<num>\"<texto>\"  onde o \" final tem du%%as backslashes? 
    # Na verdade, \\\" e du%%as backslashes + quote
    
    # Em Python string, \\\\ e du%%as backslashes literais
    # Padrao: tela:"<num>\\"<texto>\\"  -> duas backslashes
    
    # Regex para du%%as backslashes: (\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\" 
    # Em Python: (\d+\.?\d*)\\\\\\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\\\\\\"  nao, isso e ruim
    
    # Usar raw string: r'(\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\"' 
    # Mas \\" em raw string e duas chars: backslash e quote
    # E se tivermos \\\" na linha, o regex raw r'\\\"' casa com o textio "depois de um backslash"
    
    # Melhor: procurar por " seguido de outro " que nao esteja escapado
    # Ou seja: \" seguido de algo e depois outro \" 
    
    # Regex: (\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\\\
    # Isso casa com numero\"texto\\ (tres backslashes no final?!)
    
    # Simplificar: achar todos os \\\" que sao precedidos de outro \"
    # Padrao: \" algo \\\"  -> \" algo"  (remover du%%as backslashes)
    
    # Encontrar padrao: \d+\.?\d*\" <letras> \\\" 
    m = re.search(r'(\d+\.?\d*)\\"([a-zA-Z][a-zA-Z0-9+ ]*)\\"', line)
    if m:
        # Verificar se isso tem du%%as backslashes
        # Em Python, \\\\ e duas backslashes, \\\" e backslash + quote
        # A regex r'\"' casa com quote, r'\\"' casa com backslash+quote
        
        # Se o match tem \" no final (uma backslash), e a linha tem \\" (duas), entao...
        # Na verdade, o problema e: tela:"6.43\" AMOLED\"  -> duas backslashes antes da virgula
        
        # Padrao da regex r'\"' casa apenas com uma backslash + quote
        # Se a linha tem du%%as, precisamos de um padrao que capture as duas
        
        # Padrao para du%%as backslashes + quote: r'\\\"'  (raw: backslash backslash quote)
        # Sim: r'\\\"' = \\ + \" = duas chars: backslash, backslash, quote? Nopes...
        # Raw string r'\\\"' = três caracteres: \, \, "  -> mas para o regex, isso casa com \\"
        # O regex engine vê: \\\"  que é: literal backslash, literal backslash, literal quote
        # Nao, isso nao esta certo...
        
        # Deixa pra laℴter - vou fazer substituicao direta de todos os padrões conhecidos
        
        pass
    
    lines[i] = line

content = '\n'.join(lines)

# Substituições diretas para todos os casos conhecidos
# 1. tela:"6.43\" AMOLED\"  -> tela:"6.43\" AMOLED"  (duas backslashes remover uma)
# 2. tela:"5.5\" FHD AMOLED\"  -> tela:"5.5\" FHD AMOLED"
# 3. Outros...

# Vou fazer uma busca e substituicao em todo o conteudo
# Pattern: tela:"<tamanho>\"<tipo>\"  onde o final tem duas backslashes
# Regex: tela:"(\d+\.?\d*)\"([a-zA-Z ]+)\"  -> isto casa com uma backslash

# Mas se o texto tem du%%as backslashes, o regex precisa de \\\\ para cada uma
# Padrao para du%%as backslashes + quote: \"  (four chars: \, \, \, "?)
# Nao, em Python str: \\\" = backslash + quote (2 chars)
# e \\\\\" = duas backslashes + quote (3 chars)
# e em regex: \\\\\" = backslashes sao especiais, preciso de \\\\ para cada backslash literal
# Para casar com duas backslashes + quote: \\\\\
# Isso e 4 backslashes + quote em raw string = r'\\\\\"' = 5 chars: \, \, \, \, "
# Só o regex engine vê 4 backslashes + quote = 2 backslashes literais + quote

# Resumindo: para casar com du%%as backslashes em regex, uso \\\\ para cada
# Du%%as backslashes = 4 backslashes no padrao
# Padrao: r'\\\\\"' = \\\\ + \" = 4 + 2 = 6 chars em raw = regex vê: \\\\" (duas backslashes + quote) ✓

# Padrao para uma backslash + quote: r'\\\"' = \\ + \" = 2 + 2 = 4 chars em raw = regex vê: \" (uma backslash + quote)

# Padrao para duas backslashes + quote: r'\\\\\"' (8 chars em raw)
# r'\\\\\"' = \, \, \, \, " -> regex vê \\\\" = duas backslashes + quote ✓

# Padrao para uma backslash + quote: r'\\\"' (4 chars em raw)  
# r'\\\"' = \, \, " -> regex vê \" = uma backslash + quote ✓

# O texto errado tem: tela:"6.43\" AMOLED\"  -> uma backslash + quote, texto, uma backslash + quote
# O texto correto tem: tela:"6.43\" AMOLED"  -> uma backslash + quote, texto, quote (sem backslash)

# Então o problema é a segunda parte: \" no lugar de "
# Regex para casar com: \" no final: r'\"' (4 chars em raw)

# Padrao para achar: tela:"<num>\"<texto>\"  onde o final é \" (com backslash)
# Regex: r'tela:"(\d+\.?\d*)\"([a-zA-Z ]+)\"'  -> isto casa com uma backslash antes do texto e uma antes do final

# Mas no texto errado, as duas partes tem backslash: \" e \"
# Padrao: r'tela:"(\d+\.?\d*)\"([a-zA-Z ]+)\"'  -> IGUAL, porque tanto a middle quanto o final tem backslash

# O problema é que depois do tipo, em vez de ", tem \" 
# Padrao final correto: ... AMOLED"  -> AMOLED seguido de quote (sem backslash)
# Padrao final errado: ... AMOLED\"  -> AMOLED seguido de backslash + quote

# Regex para o final errado: r'\"'  (uma backslash + quote)
# Regex para o final correto: r'"'  (apenas quote)

# Então preciso achar: ...<tipo>\"  e substituir por ...<tipo>"
# Regex: r'([a-zA-Z ]+)\"\,  e substituir por r'\1",'

# Resumindo em Python:
# old = r'(\d+\.?\d*)\"([a-zA-Z ]+)\"\,  -> duas backslashes no texto
# new = r'\1\" \2"\, -> uma backslash no texto, nenhuma no final

# Mas isso nao funciona porque o padrao r'\"' casa com \", e r'"' casa com "

# Vou tentar outra abordagem: substituir TODO o conteúdo que tem du%%as backslashes
# Padrão: \" seguido de outro \" (duas ocorrências de backslash+quote)
# No texto: tela:"6.43\" AMOLED\"  -> "6.43\" AMOLED\"; o "inicio e o "fim tem backslash

# Regex para achar tela:"X\" Y\"  (com backslash em ambos):
# r'tela:"(\d+\.?\d*)\"([a-zA-Z ]+)\"'  -> isto casa com uma backslash em cada

# Mas se o texto tem realmente du%%as backslashes no fim, precisa de outro padrao

# Enfim, vou fazer substituicao especifica para cada caso que encontro

lines = content.split('\n')
fixed = 0
for i, line in enumerate(lines):
    # Casos especificos conhecidos:
    # tela:"6.43\" AMOLED\"  -> duas backslashes, remover uma no final
    if 'tela:"6.43\\" AMOLED\\"' in line:
        line = line.replace('tela:"6.43\\" AMOLED\\"', 'tela:"6.43\\" AMOLED"')
        fixed += 1
    
    # tela:"5.5\" FHD AMOLED\"  -> duas backslashes
    if 'tela:"5.5\\" FHD AMOLED\\"' in line:
        line = line.replace('tela:"5.5\\" FHD AMOLED\\"', 'tela:"5.5\\" FHD AMOLED"')
        fixed += 1

content = '\n'.join(lines)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Correções: {fixed}")
