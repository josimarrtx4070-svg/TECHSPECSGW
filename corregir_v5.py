
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed = 0

# Regex para achar: tela:"<num>\"<tipo>\"  onde o final tem backslash (errado)
# Padrao correto: tela:"<num>\"<tipo>"  sem backslash no final

# Para casar com o padrao errado: tela:"<num>\"<tipo>\", ou tela:"<num>\"<tipo>" (seguido de , ou de outro campo)
# Regex: tela:"(\d+\.?\d*)\"([a-zA-Z][a-zA-Z0-9+ ]*)\"(,|$)  - isto casa com uma backslash no inicio e no fim

# Mas no texto errado, o final tem \" (backslash+quote), nao apenas "
# Padrao que casa com o final errado: \"  (backslash+quote)
# Regex: r'\"'  = backslash + quote

# Para achar o padrao completo errado: 
# tela:"(\d+\.?\d*)\"([a-zA-Z0-9+ ]+)\"  -> isto casa com uma backslash no inicio e fim
# Mas se tiver duas backslashes no fim, precisa de outro padrao

# Padrao para du%%as backslashes no fim: \""  (backslash+quote)
# Regex: r'\"'  = \, "  = 2 chars em raw = casando com uma backslash + quote

# Padrao para duas backslashes + quote: r'\\\"'  (raw) = \, \, " = 3 chars?
# Não: em Python raw string, r'\'  = um backslash so, r'\\'  = dois, r'\"'  = quote
# Regex engine vê: r'\\\"' = \\ (uma backslash literal) + \" (quote literal) = 2 chars
# Mas preciso de duas backslashes + quote: regex vê \\\ = 3 backslashes? Nao...

# Resumindo em Python:
# Uma backslash literal em regex: \\ (em raw: r'\\'  = 2 chars que o regex vê como 1 backslash)
# Duas backslashes literais em regex: \\\\ (em raw: r'\\\\'  = 4 chars que regex vê como 2 backslashes)
# Uma backslash + quote em regex: \\\" (em raw: r'\\\"'  = 4 chars: \, \, " que regex vê como \, ")
# Duas backslashes + quote em regex: \\\\\" (em raw: r'\\\\\\\"'  = 7 chars? nao...)

# Melhor usar bytes ou strings normais

# Vou fazer uma abordagem diferente: achar todos os \" que são precedidos de outro \"
# no campo tela, e remover um deles

# Padrao: tela:"<tamanho>\"<tipo>\"  onde o final e \" (backslash+quote)
# E o correto e: tela:"<tamanho>\"<tipo>"  onde o final e apenas " (quote)

# Regex para achar: (\d+\.?\d*)\"([a-zA-Z0-9+ ]+)\"  e verificar se o final e \" ou "

# Se o final e \", preciso de \\\"  em regex (raw: r'\\\"'  = \, \, " = regex vê \, " = uma backslash + quote)
# Se o final e ", preciso de \"  em regex (raw: r'\"'  = ", " = regex vê ")

# Padrao para o final errado (backslash+quote): r'\\\"'  
# Padrao para o final correto (apenas quote): r'\"'

# Então preciso achar: tela:"(\d+\.?\d*)\"([a-zA-Z0-9+ ]*)\"  onde o grupo 2 seguido de \" 
# E substituir por: tela:"\1\"\2"  (sem o backslash no final)

# Mas o grupo 2 já inclui o tipo, e o \" e o proximo caracter
# Regex: r'tela:"(\d+\.?\d*)\"([a-zA-Z0-9+ ]+)\\'

# Nao, vou fazer mais simples: substituir diretamente em cada linha

for i, line in enumerate(lines):
    if 'tela:' not in line:
        continue
    
    # Padrao errado: tela:"<num>\"<tipo>\"  (com backslash no inicio e fim)
    # Padrao correto: tela:"<num>\"<tipo>"  (com backslash so no inicio)
    
    # Regex para achar o padrao com duas backslashes (no inicio e fim do tipo):
    # Em Python str: \\\" = backslash + quote (2 chars)
    # Em regex raw: r'\\\"' = \, " = regex vê uma backslash + quote
    
    # O padrao completo errado: tela:"<num>\"<tipo>\"  
    # regex: r'tela:"(\d+\.?\d*)\"([a-zA-Z0-9+ ]+)\"'
    # Grupo 1: num, Grupo 2: tipo
    # Este padrao casa com: tela:"6.43\" AMOLED\"  (uma backslash em cada)
    
    # Mas se o texto tem: tela:"6.43\" AMOLED\"  (COM DU%%AS BACKSLASHES NO FIM)
    # Então o padrao regex acima nao casa com o final porque tem \\\" ao invez de \"
    
    # Padrao para du%%as backslashes no fim: r'\"'  
    # Padrao para uma backslash no fim: r'\"'
    
    # Os dois sao igual? Nao:
    # r'\"'  = \, "  (raw: 2 chars) -> regex vê: uma backslash + quote ✓ (uma backslash)
    # r'\"'  = ", "  (raw: 2 chars) -> regex vê: apenas quote ✓
    
    # Ah! Entendi. Em raw string:
    # r'\"'  = \, "  → regex engine vê: \, " (uma backslash + quote)
    # r'\"'  = ", "  → regex engine vê: " (apenas quote)
    
    # Então:
    # Padrao para uma backslash + quote: r'\"'  (2 chars em raw)
    # Padrao para apenas quote: r'\"'  (2 chars em raw)
    
    # Mas ambos tem 2 chars em raw? Sim:
    # r'\"'  = '\' + '"'  → 2 chars
    # r'\"'  = '"' + '"'? Nao, r'\"'  e o mesmo que '"'  porque em raw string, \" e apenas "
    
    # Na verdade:
    # r'\"'  em Python: o backslash e a quote são 2 chars. Regex vê: \, " 
    # r'\"'  em Python: a quote so e 1 char. Regex vê: "
    
    # OK, entao:
    # Padrao para uma backslash + quote: r'\\\"'  (raw: \, \, " = 3 chars? Nao...)
    # Vamos verificar em Python():
    # len(r'\"')  = 2 (backslash, quote) → regex vê: \, "  = uma backslash + quote ✓
    # len(r'\"')  = 1 (quote) → regex vê: "  = apenas quote ✓
    
    # Então para o final errado (\"):
    # Regex: r'\"'  (raw: \, ") = 2 chars, regex vê \, " = uma backslash + quote
    # Para o final correto (apenas "):
    # Regex: r'\"'  (raw: ", ") = 2 chars? Nao, r'\"'  e " (1 char)
    
    # Hum, estou confuso. Vou testar diretamente:
    pass

# Abordagem mais simples: usar replace direto com strings Python normais (não raw)

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Lista de padroes para corrigir
# Padrao errado: tela:"<num>\"<tipo>\"  (duas backslashes, uma no inicio e uma no fim)
# Padrao correto: tela:"<num>\"<tipo>"  (somente uma no inicio)

# Em Python string normal (não raw):
# Du%%as backslashes: "\\\\"  = 2 chars (ambos backslash)
# Uma backslash + quote: "\\""  = 2 chars (backslash, quote)  -- mas Python precisa de escape...
# Uma quote: '""'  ou '"'  = 1 char

# Em Python, para representar uma string que tem uma backslash + quote:
# "\\\""  -> 3 chars: \, \, " (mas o Python vê: \, ")
# Na verdade:
# s = "\\\""  -> len(s) = 2, s[0] = \, s[1] = "
# Porque \\ e \, e \" e "

# Então:
# Para representar uma backslash + quote: "\\\""  (3 chars em código, 2 em memória)
# Para representar apenas quote: '"'  ou '\"'  (1 char em memória)

# Agora, o padrao errado no arquivo:
# tela:"6.43\" AMOLED\"  -> aqui temos: tela:" + 6.43 + \" +  AMOLED + \"
# Que em Python seria: 'tela:"6.43\\" AMOLED\\"'  (com \\ para cada backslash)

# Verificar:
# s = 'tela:"6.43\\" AMOLED\\"'  -> len(s) = ? 
# t e l a : " 6 . 4 3 \ "   A M O L E D \ "
# = 17 chars

# O correto seria: 'tela:"6.43\\" AMOLED"'  (um backslash a menos)
# t e l a : " 6 . 4 3 \ "   A M O L E D "
# = 16 chars

# Então a substituicao e:
# 'tela:"6.43\\" AMOLED\\"' -> 'tela:"6.43\\" AMOLED"'

# Mas preciso achar TODOS os casos, não só esse

# Padrao generico: tela:"<tamanho>\"<tipo>\"  (duas backslashes: uma no tamanho, uma no tipo)
# Regex para achar: r'tela:"([0-9.]+)\"([a-zA-Z0-9+ ]+)\"'
# Grupo 1: tamanho, Grupo 2: tipo
# Este padrao casa com: tela:"6.43\" AMOLED\"  (porque ambos tem ")

# Mas o problema e que no arquivo, o tipo tem \" no lugar de "
# Padrao: tela:"<tamanho>\"<tipo>\"  e o correto e tela:"<tamanho>\"<tipo>"
# A diferença e o backslash antes do quote final

# Em Python string:
# Errado: 'tela:"6.43\\" AMOLED\\"'  (2 backslashes: \\ não e uma backslash literal)
# Espera, preciso ser mais cuidadoso:

# Python string:
# "\\"  = uma backslash (pois \\ e escape para \)
# "\""  = uma quote (não precisa de escape, mas pode)
# "\\\""  = uma backslash + uma quote (primeiro \\ e \, segundo \" e ")

# Na memoria:
# s = "\\\""  -> len(s) = 2, s[0] = \, s[1] = "

# Então para o texto do arquivo:
# "tela:\"6.43\\" AMOLED\\""  em Python string = tela:"6.43\" AMOLED\"  em memória
# (o Python vê: \\" = \, " e \\" = \, ")

# E o correto:
# "tela:\"6.43\\" AMOLED\""  em Python string = tela:"6.43\" AMOLED"  em memória
# (o Python vê: \\" = \, " e " = " sem backslash)

# Então a substituicao e:
# old = 'tela:"6.43\\" AMOLED\\"'  (com \\" = \, " no Python)
# new = 'tela:"6.43\\" AMOLED"'  (com \\" = \, " e " = " no Python)

# Mas o problema e achar TODOS os padroes sem saber os tamanhos e tipos

# Regex para achar o padrao errado e substituir:
# O padrao tem: tela:"<num>"<tipo>"  onde tudo tem backslash
# Mas se o tipo tem backslash no Python, preciso de \\" para casa com \" no arquivo

# Em regex raw (Python r'...'):
# r'\"'  = \, "  = regex vê \, " (uma backslash + quote) ✓
# r'\"'  = "  (raw: apenas quote) = regex vê " ✓

# Padrao completo errado em regex raw:
# r'tela:"(\d+\.?\d*)\"([a-zA-Z0-9+ ]+)\"'  -> casa com tela:"6.43\" AMOLED\"  (duas backslashes)
# Grupo 1: 6.43, Grupo 2: AMOLED

# Mas não funciona se o tipo tiver du%%as backslashes? Nao, se tiver uma só, funciona

# Se o tipo tiver duas backslashes (\\" em vez de \"):
# r'tela:"(\d+\.?\d*)\"([a-zA-Z0-9+ ]+)\"'
# Nao casa com AMOLED\\" porque o padrao espera um " só, mas encontra " + mais coisa

# OK então o problema e que alguns campos tem duas backslashes no fim tipo ("\")
# E outros tem apenas uma (\")

# Vou fazer uma abordagem de tentativa e erro com varios padroes

lines = content.split('\n')
fixed = 0

for i, line in enumerate(lines):
    if 'tela:' not in line:
        continue
    
    # Padrao com duas backslashes no fim (errado): tela:"X\" Tipo\"  (backslash+quote no tipo)
    # Regex raw: r'tela:"(\d+\.?\d*)\"([a-zA-Z0-9+ ]+)\"$'  (com $ para fina do campo)
    # Mas como o campo pode ser seguido de , ou de outro campo, não usar $
    
    # Padrao 1: tela:"X\" Tipo\"  (duas backslashes)
    # Regex: r'tela:"(\d+\.?\d*)\"([a-zA-Z0-9+ ]+)\"'
    # Grupo 1: num, Grupo 2: tipo
    m1 = re.search(r'tela:"(\d+\.?\d*)"([a-zA-Z0-9+ ]+)"', line)
    if m1:
        # Verificar se o match tem backslash no final (errado) ou so quote (correto)
        end_pos = m1.end()
        if end_pos < len(line) and line[end_pos] == '\\':
            # Tem backslash apos o match -> errado
            # Substituir: remover o backslash do final
            old_tela = f'tela:"{m1.group(1)}\\"{m1.group(2)}\\"'  # com duas backslashes
            new_tela = f'tela:"{m1.group(1)}\\"{m1.group(2)}"'  # com uma so
            if old_tela in line:
                line = line.replace(old_tela, new_tela)
                fixed += 1

    # Padrao 2: tela:"X" Tipo"  (sem backslash no tamanho, sem backslash no tipo -> erro de sintaxe)
    # Regex: r'tela:"(\d+\.?\d*)"([a-zA-Z0-9+ ]+)"'
    m2 = re.search(r'tela:"(\d+\.?\d*)"([a-zA-Z0-9+ ]+)"', line)
    if m2:
        # Verificar se tem backslash no tamanho (não) e no tipo (não)
        # Este padrao casa com tela:"5" FHD Super AMOLED"  (sem escape)
        # Corrigir adicionando backslash no tamanho
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
