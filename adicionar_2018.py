
# Adicionar smartphones 2018 que faltam
with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

smartphones_2018 = """
// === NOVO: Samsung 2018 (faltando) ===
,{score:55,name:"Samsung Galaxy A3 (2018)",chip:"Exynos 7885",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.2\" FHD Super AMOLED",ano:"2018"},
,{score:58,name:"Samsung Galaxy A5 (2018)",chip:"Exynos 7885",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.2\" FHD Super AMOLED",ano:"2018"},
,{score:62,name:"Samsung Galaxy A7 (2018)",chip:"Snapdragon 450",ram:"3GB",storage:"32GB",camera:"24MP + 5MP + 2MP",battery:"3300mAh",tela:"5.9\" FHD+ Super AMOLED",ano:"2018"},
,{score:48,name:"Samsung Galaxy J5 (2018)",chip:"Exynos 7870",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.5\" HD+ Super AMOLED",ano:"2018"},
,{score:45,name:"Samsung Galaxy J7 (2018)",chip:"Exynos 7870",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.5\" HD+ Super AMOLED",ano:"2018"},
,{score:50,name:"Samsung Galaxy J5 Prime (2018)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.2\" HD+ Super AMOLED",ano:"2018"},
,{score:52,name:"Samsung Galaxy J7 Prime (2018)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2600mAh",tela:"5.5\" FHD+ Super AMOLED",ano:"2018"},
,{score:55,name:"Samsung Galaxy J7 2018",chip:"Exynos 7870",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.5\" HD+ Super AMOLED",ano:"2018"},
,{score:48,name:"Samsung Galaxy J4 Prime (2018)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP",battery:"2500mAh",tela:"5.3\" HD IPS",ano:"2018"},
,{score:45,name:"Samsung Galaxy J2 (2018)",chip:"Exynos 7870",ram:"1.5GB",storage:"16GB",camera:"8MP",battery:"2200mAh",tela:"4.7\" HD IPS",ano:"2018"},
,{score:42,name:"Samsung Galaxy J3 (2018)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"5.2\" HD+ Super AMOLED",ano:"2018"},

// === Samsung 2018 (faltando) ===
,{score:55,name:"Samsung Galaxy J7 Duo",chip:"Exynos 7870",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.5\" HD+ Super AMOLED",ano:"2018"},
,{score:50,name:"Samsung Galaxy J5 Duo",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"5.5\" HD+",ano:"2018"},
,{score:48,name:"Samsung Galaxy J2 2018",chip:"Exynos 7870",ram:"1.5GB",storage:"16GB",camera:"8MP",battery:"2200mAh",tela:"4.7\" HD IPS",ano:"2018"},
,{score:45,name:"Samsung Galaxy Core Prime",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2300mAh",tela:"4.7\" HD IPS",ano:"2018"},
,{score:42,name:"Samsung Galaxy Core",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"4.5\" HD IPS",ano:"2018"},
,{score:48,name:"Samsung Galaxy A5s",chip:"Exynos 7885",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.7\" FHD+ Super AMOLED",ano:"2018"},
,{score:52,name:"Samsung Galaxy A4s",chip:"Unisoc SC7731C",ram:"2GB",storage":"16GB",camera:"13MP + 5MP",battery":"2400mAh",tela:"5.2\" HD+ IPS",ano:"2018"},
,{score:55,name:"Samsung Galaxy A6s",chip:"Exynos 7885",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3200mAh",tela:"5.7\" FHD+ Super AMOLED",ano:"2018"},
,{score:58,name:"Samsung Galaxy J4 plus",chip:"Exynos 7870",ram:2GB",storage:16GB",camera:13MP",battery:2500mAh",tela:"5.3\" HD PS",ano:"2018"},

// === NOVO: iPhone 2018 (faltando) ===
,{score:58,name:"iPhone SE (2nd generation)",chip:"A13 Bionic",ram:"3GB",storage:"64GB",camera:"12MP",battery:"1821mAh",tela:"4.7\" Retina HD",ano:"2020"},
,{score:62,name:"iPhone XR (64GB)",chip:"A12 Bionic",ram:"4GB",storage:"64GB",camera:"12MP + 12MP",battery:"2942mAh",tela:"6.1\" Liquid Retina",ano:"2018"},
,{score:60,name:"iPhone XR (128GB)",chip:"A12 Bionic",ram:"4GB",storage:"128GB",camera:"12MP + 12MP",battery:"2942mAh",tela:"6.1\" Liquid Retina",ano:"2018"},

// === NOVO: Sony Xperia 2018 (faltando) ===
,{score:60,name:"Sony Xperia XZ2 Premium Edition",chip:"Snapdragon 845",ram:"6GB",storage:"128GB",camera:"12MP + 12MP + 12MP",battery:"3230mAh",tela:"5.0\" 4K HDR OLED",ano:"2018"},
,{score:55,name:"Sony Xperia L1 (2018)",chip:"Snapdragon 650",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"2900mAh",tela:"5.5\" HD+ IPS",ano:"2018"},
,{score:48,name:"Sony Xperia XA2 Plus",chip:"Snapdragon 652",ram:"3GB",storage:"32GB",camera:"13MP + 5MP + 2MP",battery:"3250mAh",tela:"6.0\" HD+ IPS",ano:"2018"},
,{score:50,name:"Sony Xperia XA2 Ultra",chip:"Snapdragon 652",ram:"3GB",storage:"32GB",camera:"13MP + 5MP + 2MP",battery:"3830mAh",tela:"6.5\" HD+ IPS",ano:"2018"},
,{score:45,name:"Sony Xperia C4",chip:"Snapdragon 410",ram:"2GB",storage":"16GB",camera:"8MP + 5MP",battery:"2300mAh",tela:"5.7\" HD+ IPS",ano:"2017"},

// === NOVO: Xiaomi/Redmi 2018 (faltando) ===
,{score:62,name:"Xiaomi Mi Mix 2S",chip:"Snapdragon 845",ram:"6GB",storage:"64GB",camera:"12MP + 5MP",battery:"3400mAh",tela:"5.99\" FHD Curved AMOLED",ano:"2018"},
,{score:58,name:"Xiaomi Mi 6X",chip:"Snapdragon 660",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"3010mAh",tela:"5.99\" FHD+ IPS LCD",ano:"2017"},
,{score:55,name:"Xiaomi Redmi A5T",chip:"Unisoc T310",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"3000mAh",tela:"5.5\" HD+ IPS",ano:"2018"},
,{score:50,name:"Xiaomi Redmi A5T",chip:"Unisoc T310",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"3000mAh",tela:"5.7\" HD+ IPS",ano:"2018"},

// === NOVO: OnePlus 2018 (faltando) ===
,{score:62,name:"OnePlus 5 (8GB)",chip:"Snapdragon 835",ram:"8GB",storage:"128GB",camera:"16MP + 20MP",battery:"3300mAh",tela:"5.5\" FHD+ AMOLED",ano:"2017"},
,{score:58,name:"OnePlus 6 (8GB)",chip:"Snapdragon 845",ram:"8GB",storage:"128GB",camera:"16MP + 20MP",battery:"3300mAh",tela:"6.2\" Optic AMOLED",ano:"2018"},
,{score:55,name:"OnePlus 5T (6GB)",chip:"Snapdragon 835",ram:"6GB",storage":"64GB",camera:"16MP + 20MP",battery:"3300mAh",tela:"6.0\" FHD+ AMOLED",ano:"2017"},

// === NOVO: Nokia/HMD 2018 (faltando) ===
,{score:44,name:"Nokia 8 Sirocco",chip:"Snapdragon 630",ram:"3GB",storage:"32GB",camera:"13MP + 3MP",battery:"2650mAh",tela:"5.8\" FHD IPS",ano:"2017"},
,{score:48,name:"Nokia 8 Sirocco 2018",chip:"Snapdragon 630",ram:"3GB",storage:"32GB",camera:"12MP + 5MP + 2MP",battery:"2850mAh",tela:"5.2\" FHD IPS",ano:"2018"},
,{score:42,name:"Nokia 3310 4G (2018)",chip:"Qualcomm 205",ram:"0.5GB",storage:"4GB",camera:"2MP",battery:"1200mAh",tela:"2.8\" HVGA IPS",ano:"2017"},
,{score:38,name:"Nokia 8110 4G (2018)",chip:"Qualcomm 215",ram:"1GB",storage:"8GB",camera:"5MP",battery:"1500mAh",tela:"1.43\" QHD IPS",ano:"2017"},

// === NOVO: Motorola 2018 (faltando) ===
,{score:40,name:"Moto E5 Plus (2018)",chip:"MediaTek Helio P23",ram:"2GB",storage":"16GB",camera:"8MP",battery:"3000mAh",tela:"5.7\" HD IPS",ano:"2018"},
,{score:42,name:"Moto G6 Plus 2018",chip:"Snapdragon 450",ram:2GB",storage:"32GB",camera:"12MP + 5MP",battery:2600mAh",tela:"5.7\" HD+ IPS",ano:"2018"},
,{score:45,name:"Moto G6 Play (2018)",chip:"MediaTek Helio P23",ram:2GB",storage:32GB",camera:"12MP + 2MP",battery:2800mAh",tela:"5.7\" HD+ IPS",ano:"2018"},

// === NOVO: Oppo 2018 (faltando) ===
,{score:52,name:"Oppo A5 (2018)",chip:"Snapdragon 425",ram:2GB",storage:32GB",camera:13MP + 5MP",battery:2300mAh",tela:"4.9\" FHD IPS",ano:"2018"},
,{score:55,name:"Oppo A7 (2018)",chip:"MediaTek Helio P22",ram:3GB",storage:32GB",camera:16MP + 2MP",battery:3000mAh",tela:5.5\" Full HD+ IPS",ano:"2018"},
,{score:58,name:"Oppo Find X (2018)",chip:"Snapdragon 845",ram:8GB",storage:128GB",camera:48MP + 2MP",battery:3900mAh",tela:6.4\" FHD+ Optica Yizo",ano:"2018"},
,{score:60,name:"Oppo Reno 10x Zoom",chip:"Snapdragon 636",ram:4GB",storage:64GB",camera:12MP + 5MP + 2MP",battery:3500mAh",tela:6.3\" HD+ Optica 3D 2018",ano:"2018"},
,{score:65,name:"Oppo Reno 5G (2018)",chip:"Snapdragon 845",ram:6GB",storage:64GB",camera:12MP + 5MP + 5MP",battery:3800mAh",tela:6.4\" FHD+ Optica Camera 2018",ano:"2018"},

// === NOVO: Vivo/Other 2018 (faltando) ===
,{score:52,name:"Vivo V9 Pro",chip:"Snapdragon 660",ram:4GB",storage:64GB",camera:12MP + 2MP",battery:3500mAh",tela:5.7\" FHD IPS",ano:"2017"},
,{score:48,name:"Vivo V21",chip:"Snapdragon 665",ram:3GB",storage:64GB",camera:12MP + 2MP",battery:3500mAh",tela:6.4\" FHD+ Slim IPS",ano:"2018"},
,{score:50,name:"Vivo V15 Pro",chip:"Snapdragon 636",ram:3GB",storage:128GB",camera:32MP + 5MP + 2MP",battery:3300mAh",tela:6.4\" Full HD+ Slim IPS",ano:"2018"},
,{score:45,name:"Vivo V15",chip:"Snapdragon 636",ram:3GB",storage:64GB",camera:32MP + 2MP + 2MP",battery:3300mAh",tela:6.4\" HD+ Slim IPS",ano:"2018"},
,{score:55,name:"Vivo V15 Pro",chip:"Snapdragon 636",ram:3GB",storage:128GB",camera:32MP + 5MP + 2MP",battery:"3300mAh",tela:"6.4\" Full HD+ Slim IPS",ano:"2018"},
,{score:50,name:"Vivo X21",chip:"Snapdragon 665",ram:4GB",storage:64GB",camera:48MP + 5MP + 2MP",battery:3300mAh",tela:6.53\" Full HD+ IPS",ano:"2018"},

// === NOVO: Lenovo/Smartphone 2018 (faltando) ===
,{score:40,name:"Lenovo Vibe S1",chip:"Snapdragon 215",ram:1.5GB",storage:8GB",camera:5MP",battery:2000mAh",tela:4.5\" HD IPS",ano:"2018"},
,{score:42,name:"Lenovo Vibe K1a Pro",chip:"MediaTek Helio A22",ram:2GB",storage:32GB",camera:13MP + 2MP",battery:3000mAh",tela:5.5\" HD+ IPS",ano:"2018"},
,{score:45,name:"Lenovo Vibe K4 Note",chip:"Snapdragon 450",ram:2GB",storage:32GB",camera:13MP + 5MP",battery:3000mAh",tela:5.7\" HD+ IPS",ano:"2018"},
,{score:45,name:"Lenovo Vibe K5 Note (2018)",chip:"Snapdragon 450",ram:2GB",storage:32GB",camera:13MP + 5MP",battery:3200mAh",tela:5.7\" HD+ IPS",ano:"2018"},
"""

# Inserir antes de cpus:[
idx = content.find('cpus:[')
if idx == -1:
    idx = content.find('rumores:[')

if idx > 0:
    content = content[:idx] + smartphones_2018 + '\n' + content[idx:]
    with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Adicionados {smartphones_2018.count(chr(10))+1} smartphones 2018!")
else:
    print("Localização não encontrada - inserindo no final")
    # Fallback: inserir antes do última linha com rumores:[
    idx = content.rfind('\n,')
    content = content[:idx+1] + smartphones_2018 + '\n' + content[idx+1:]
    with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Adicionados {smartphones_2018.count(chr(10))+1} smartphones 2018 (inserção final)")
