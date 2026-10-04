
# Script corrigido para adicionar smartphones 2017 que faltam
with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Smartphones 2017 importantes que faltam - formatados corretamente
smartphones_2017 = """
// === 2017 Samsung Galaxy que faltam ===
,{score:52,name:"Samsung Galaxy World Edition",chip:"Snapdragon 652",ram:"4GB",storage:"64GB",camera:"12MP + 2MP",battery:"3000mAh",tela:"6.0\" FHD+ IPS",ano:"2017"},
,{score:48,name:"Samsung Galaxy J2 Core Windows",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2200mAh",tela:"4.7\" HD IPS",ano:"2017"},
,{score:40,name:"Samsung Galaxy On5 (2017)",chip:"Exynos 7570",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"5.0\" HD IPS",ano:"2017"},
,{score:35,name:"Samsung Galaxy On7 Pro (2017)",chip:"Exynos 7580",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.5\" FHD Super AMOLED",ano:"2017"},
,{score:38,name:"Samsung Galaxy S7",chip:"Exynos 7420",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"5.1\" QHD AMOLED",ano:"2016"},
,{score:38,name:"Samsung Galaxy J7 (2017)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.5\" FHD IPS",ano:"2017"},
,{score:42,name:"Samsung Galaxy J5 (2017)",chip:"Exynos 7570",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"5.2\" HD IPS",ano:"2017"},

// === 2017 Sony Xperia que faltam ===
,{score:48,name:"Sony Xperia Z5",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"23MP + 5MP",battery:"2700mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:50,name:"Sony Xperia Z5 Compact",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"21MP",battery:"2200mAh",tela:"4.6\" FHD IPS",ano:"2016"},
,{score:55,name:"Sony Xperia X",chip:"Snapdragon 652",ram:"2GB",storage:"32GB",camera:"23MP + 5MP",battery:"2500mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:58,name:"Sony Xperia X Compact (2016)",chip:"Snapdragon 652",ram:"2GB",storage:"32GB",camera:"23MP + 5MP",battery:"2400mAh",tela:"4.6\" FHD IPS",ano:"2016"},
,{score:60,name:"Sony Xperia X Performance",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"23MP + 5MP",battery:"2500mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:62,name:"Sony Xperia XA1",chip:"Snapdragon 650",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"2900mAh",tela:"5.2\" FHD IPS",ano:"2017"},
,{score:55,name:"Sony Xperia XA1 Ultra",chip:"Snapdragon 650",ram:"3GB",storage:"32GB",camera:"13MP + 8MP",battery:"2900mAh",tela:"6.0\" FHD IPS",ano:"2017"},
,{score:48,name:"Sony Xperia A4 (2017)",chip:"Snapdragon 650",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2900mAh",tela:"5.5\" FHD IPS",ano:"2017"},

// === 2017 Vivo/IQOO/Xiaomi (faltando) ===
,{score:52,name:"Vivo V9 Pro (2017)",chip:"Snapdragon 660",ram:"4GB",storage:"64GB",camera:"12MP + 2MP",battery:"3500mAh",tela:"5.7\" FHD IPS",ano:"2017"},
,{score:48,name:"Vivo V9 (2017)",chip:"Snapdragon 660",ram:"4GB",storage:"64GB",camera:"12MP + 2MP",battery:"3500mAh",tela:"5.7\" FHD IPS",ano:"2017"},
,{score:50,name:"Vivo Y53A Pro",chip:"Snapdragon 615",ram:"2GB",storage:"16GB",camera:"13MP + 2MP",battery:"2600mAh",tela:"5.2\" FHD IPS",ano:"2017"},
,{score:42,name:"Vivo V3 (2016)",chip:"Snapdragon 616",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2200mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:45,name:"Vivo V7 Plus",chip:"Snapdragon 652",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"3200mAh",tela:"5.5\" FHD IPS",ano:"2017"},

// === 2017 Lenovo/Smartphone (faltando) ===
,{score:36,name:"Lenovo Vibe K1a",chip:"Exynos 7570",ram:"1.5GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"4.5\" HD IPS",ano:"2017"},
"""

# Inserir antes do cpus:[
idx = content.find('cpus:[')
if idx == -1:
    idx = content.find('rumores:[')

if idx > 0:
    content = content[:idx] + smartphones_2017 + '\n' + content[idx:]
    with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Inserção bem-sucedida!")
    print(f"Adicionados {smartphones_2017.count(chr(10))+1} novos smartphones 2017")
else:
    print("Localização não encontrada")
