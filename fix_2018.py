
import re

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# As linhas 291-292 têm o padrão errado: tela:\\"5.2\\" FHD Super AMOLED\\"
# Precisamos: tela:"5.2\" FHD Super AMOLED"

# Vou recriar essas linhas corretamente e substituir
old_lines = """{score:55,name:"Samsung Galaxy A3 (2018)",chip:"Exynos 7885",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:\\"5.2\\\\\\" FHD Super AMOLED\\\\\\",ano:"2018"},
,{score:58,name:"Samsung Galaxy A5 (2018)",chip:"Exynos 7885",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3300mAh",tela:\\"5.2\\\\\\" FHD Super AMOLED\\\\\\",ano:"2018"},"""

new_lines = """{score:55,name:"Samsung Galaxy A3 (2018)",chip:"Exynos 7885",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.2\\" FHD Super AMOLED",ano:"2018"},
,{score:58,name:"Samsung Galaxy A5 (2018)",chip:"Exynos 7885",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.2\\" FHD Super AMOLED",ano:"2018"},"""

if old_lines in content:
    content = content.replace(old_lines, new_lines)
    print("Linhas 291-292 corrigidas!")
else:
    print("Padrão não encontrado exatamente, tentando alternativa...")
    # Tenta achar com padrão mais flexível
    import re
    pattern = r'tela:\\"5\.2\\" FHD Super AMOLED\\"'
    matches = re.findall(pattern, content)
    print(f"Encontrados {len(matches)} matches com regex")
    if matches:
        content = re.sub(pattern, 'tela:"5.2\\" FHD Super AMOLED"', content)
        print("Regex aplicado!")

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Arquivo atualizado!")
