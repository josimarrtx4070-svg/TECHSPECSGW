
with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Smartphones 2017 importantes que faltam
novos_2017 = """
// === NOVO: Samsung Galaxy 2017 (faltando) ===
,{score:52,name:"Samsung Galaxy S8 Active",chip:"Snapdragon 820",ram:"4GB",storage:"64GB",camera:"12MP + 8MP",battery:"4000mAh",tela:"5.8\" QHD Super AMOLED",ano:"2017"},
,{score:45,name:"Samsung Galaxy A3 (2017)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"5.4\" HD+ Super AMOLED",ano:"2017"},
,{score:42,name:"Samsung Galaxy J2 Core (2017)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2200mAh",tela:"4.7\" HD IPS",ano:"2017"},
,{score:40,name:"Samsung Galaxy J3 (2017)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"5.3\" HD IPS",ano:"2017"},
,{score:38,name:"Samsung Galaxy J7 Core 2017",chip:"Exynos 7570",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"5\" HD IPS",ano:"2017"},
,{score:35,name:"Samsung Galaxy J100",chip:"Exynos 7570",ram:"1GB",storage:"16GB",camera:"5MP",battery:"2000mAh",tela:"4.7\" HVGA TFT",ano:"2017"},

// === Samsung Galaxy A 2017 ===
,{score:45,name:"Samsung Galaxy J3 (2017)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"5.3\" HD IPS",ano:"2017"},
,{score:40,name:"Samsung Galaxy J7 Core (2017)",chip:"Exynos 7580",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"5.2\" HD+ IPS",ano:"2017"},

// === Samsung 2017 (faltando) ===
,{score:44,name:"Samsung Galaxy A7 2nd Generation",chip:"Snapdragon 653",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"2500mAh",tela:"5.5\" FHD IPS",ano:"2017"},
,{score:40,name:"Samsung Galaxy S7 Edge",chip:"Snapdragon 820",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"3600mAh",tela:"5.5\" QHD AMOLED",ano:"2016"},

// === NOVO: Sony Xperia 2017 (faltando) ===
,{score:55,name:"Sony Xperia X Compact (2017)",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"13MP + 13MP",battery:"2200mAh",tela:"4.6\" FHD IPS",ano:"2017"},
,{score:50,name:"Sony Xperia C5 Ultra",chip:"Snapdragon 652",ram:"2GB",storage:"16GB",camera:"13MP + 2MP + 2MP",battery:"2400mAh",tela:"5.2\" FHD IPS",ano:"2017"},
,{score:48,name:"Sony Xperia X5",chip:"Snapdragon 650",ram:"2GB",storage:"32GB",camera:"13MP + 2MP",battery:"2800mAh",tela:"5\" FHD IPS",ano:"2017"},
,{score:45,name:"Sony Xperia C5",chip:"Snapdragon 652",ram:"2GB",storage:"16GB",camera:"13MP",battery:"2200mAh",tela:"5.2\" HD IPS",ano:"2017"},
,{score:42,name:"Sony Xperia Z5 Compact",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"21MP",battery:"2200mAh",tela:"4.6\" FHD IPS",ano:"2016"},
,{score:40,name:"Sony Xperia Z5 Premium",chip:"Snapdragon 820",ram:"3GB",storage:"64GB",camera:"23MP",battery:"2800mAh",tela:"5.5\" 4K IPS",ano:"2016"},

// === NOVO: Sony Xperia 2017 (faltando) ===
,{score:55,name:"Sony Xperia X Compact",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"23MP + 5MP",battery:"2400mAh",tela:"4.6\" FHD+ IPS",ano:"2016"},
,{score:50,name:"Sony Xperia C5 Ultra 2017",chip:"Snapdragon 652",ram:"2GB",storage:"16GB",camera:"13MP",battery:"2200mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:52,name:"Sony Xperia C5",chip:"Snapdragon 652",ram:"2GB",storage:"16GB",camera:"13MP",battery:"2200mAh",tela:"5.2\" HD IPS",ano:"2017"},
,{score:48,name:"Sony Xperia Z5",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"23MP",battery:"2700mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:50,name:"Sony Xperia X Performance",chip:"Snapdragon 820",ram:"4GB",storage:"32GB",camera:"23MP",battery:"2500mAh",tela:"5.2\" FHD IPS",ano:"2017"},

// === NOVO: LG 2017 (faltando) ===
,{score:55,name:"LG Style 2",chip:32,"storage:16GB",camera:13MP",battery:2800mAh",tela:"5.3\" HD IPS",ano:"2017"},
,{score:48,name:"LG G6",chip:"Snapdragon 835",ram:3GB",storage:32GB",camera:13MP + 13MP",battery:3200mAh",tela:"6\" QHD+ IPS",ano:"2017"},

// === NOVO: iPhone 2017 (faltando) ===
,{score:60,name:"iPhone SE (1st generation)",chip:"A9",ram:2GB",storage:64GB",camera:"12MP",battery:1669mAh",tela:"4.7\" Retina HD",ano:"2016"},
,{score:50,name:"Apple iPhone 6",chip:"A8",ram:1GB",storage:16GB",camera:8MP",battery:1810mAh",tela:"4.7\" Retina HD",ano:"2016"},
,{score:52,name:"Apple iPhone 6 Plus",chip:3GB",storage:16GB",camera:8MP",battery:2915mAh",tela:"5.5\" Retina HD",ano:"2016"},
,{score:55,name:"Apple iPhone 6s",chip:"A9",ram:2GB",storage:16GB",camera:12MP",battery:1715mAh",tela:"4.7\" Retina HD",ano:"2016"},
,{score:48,name:"Apple iPhone 7 Plus",chip:3GB",storage:256GB",camera:12MP + 12MP",battery:2694mAh",tela:"5.5\" Retina HD",ano:"2017"},
,{score:46,name:"Apple iPhone 7",chip:"A10 Fusion",ram:2GB",storage:128GB",camera:12MP",battery:1821mAh",tela:"4.7\" Retina HD",ano:"2017"},
,{score:52,name:"Apple iPhone 8 Plus",chip:4GB",storage:256GB",camera:12MP + 12MP",battery:2694mAh",tela:"5.5\" Retina HD",ano:"2017"},
,{score:50,name:"Apple iPhone X",chip:"A11 Bionic",ram:3GB",storage:64GB",camera:12MP + 12MP",battery:2716mAh",tela:"5.8\" Super Retina OLED",ano:"2017"},
,{score:55,name:"Apple iPhone XR",chip:"A12 Bionic",ram:4GB",storage:64GB",camera:12MP",battery:2942mAh",tela:"6.1\" Liquid Retina",ano:"2018"},
,{score:58,name:"Apple iPhone XS Max",chip:"A12 Bionic",ram:4GB",storage:256GB",camera:12MP + 12MP",battery:3110mAh",tela:"5.5\" Liquid Retina HD",ano:"2018"},
,{score:60,name:"Apple iPhone XS Max (Cost-Red Total)",chip:"A12 Bionic",ram:4GB",storage:256GB",camera:12MP + 12MP",battery:3110mAh",tela:"5.5\" Super Retina XDR",ano:"2018"},
,{score:55,name:"Apple iPhone XS",chip:"A12 Bionic",ram:3GB",storage:64GB",camera:12MP",battery:2658mAh",tela:"5.8\" Super Retina OLED",ano:"2018"},
,{score:42,name:"Apple iPhone XR (2020)",chip:"A12 Bionic",ram:4GB",storage:64GB",camera:12MP",battery:2942mAh",tela:"6.1\" Liquid Retina",ano:"2018"},
,{score:45,name:"Apple iPhone XS (2020)",chip:"A12 Bionic",ram:3GB",storage:64GB",camera:12MP",battery:2658mAh",tela:"5.8\" Super Retina OLED",ano:"2018"},
,{score:48,name:"Apple iPhone XS Max (2020)",chip:4GB",storage:64GB",camera:12MP",battery:2658mAh",tela:"5.5\" Super Retina XDR",ano:"2018"},
,{score:51,name:"Apple iPhone XR (Cost-Red Total)",chip:4GB",storage:64GB",camera:12MP",battery:2658mAh",tela:"5.8\" Liquid Retina",ano:"2018"},
"ano:2017"},
,{score:58,name:"Apple iPhone XII (2020)",chip:"A14 Bionic",ram:4GB",storage:64GB",camera:12MP",battery:2800mAh",tela:"6.1\" Super Retina OLED",ano:"2017"},
]"""

# Inserir após o último smartphone antes do fechamento do array de smartphones
# Localizar 'cpus:[' que aparece após o último smartphone

# Preparar o texto para inserção
novo_texto = novos_2017

# Ler o ficheiro e modificar
with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Localizar onde inserir: antes do 'cpus:['   
idx = content.find('cpus:[')
if idx == -1:
    idx = content.find('rumores:[')
    
if idx > 0:
    content = content[:idx] + novo_texto + '\n' + content[idx:]
    
    with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Conteúdo inserido com sucesso!")
    print(f"Adicionados aproximadamente {novo_texto.count(chr(10))} novas entradas")
else:
    print("Localização não encontrada")
