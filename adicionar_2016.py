
import sys
sys.path.insert(0, 'C:/Users/jo/Desktop/TechSpecsGW')

with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Smartphones 2016 que faltam - organizados por marca
novos_2016 = """
// === NOVO: Samsung Galaxy A 2016 (faltando) ===
,{score:36,name:"Samsung Galaxy A3 (2016)",chip:"Exynos 7580",ram:"2GB",storage:"16GB",camera:"8MP + 5MP",battery:"2300mAh",tela:"4.7\" HD Super AMOLED",ano:"2016"},
,{score:38,name:"Samsung Galaxy A5 (2016)",chip:"Exynos 7580",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"5\" HD Super AMOLED",ano:"2016"},
,{score:40,name:"Samsung Galaxy A7 (2016)",chip:"Exynos 7580",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"5.3\" HD Super AMOLED",ano:"2016"},
,{score:42,name:"Samsung Galaxy A8 (2016)",chip:"Exynos 7580",ram:"3GB",storage:"32GB",camera:"16MP + 5MP",battery:"2200mAh",tela:"5.7\" FHD Super AMOLED",ano:"2016"},
,{score:35,name:"Samsung Galaxy A9 Pro (2016)",chip:"Exynos 7580",ram:"4GB",storage:"32GB",camera:"16MP + 5MP",battery:"2550mAh",tela:"5.7\" FHD Super AMOLED",ano:"2016"},
,{score:28,name:"Samsung Galaxy J1 (2016)",chip:"Exynos 7570",ram:"1GB",storage:"16GB",camera:"5MP",battery:"2000mAh",tela:"4.5\" HVGA TFT",ano:"2016"},
,{score:30,name:"Samsung Galaxy J1 Mini",chip:"Exynos 7570",ram:"1GB",storage:"16GB",camera:"5MP",battery:"2000mAh",tela:"4\" HVGA TFT",ano:"2016"},
,{score:32,name:"Samsung Galaxy J3 (2016)",chip:"Exynos 7570",ram:"1.5GB",storage:"16GB",camera:"8MP + 5MP",battery:"2000mAh",tela:"4.7\" HD IPS",ano:"2016"},
,{score:34,name:"Samsung Galaxy J5 (2016)",chip:"Exynos 7570",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"5.2\" HD IPS",ano:"2016"},
,{score:36,name:"Samsung Galaxy J7 (2016)",chip:"Exynos 7580",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2600mAh",tela:"5.5\" HD Super AMOLED",ano:"2016"},
,{score:38,name:"Samsung Galaxy J7 Pro",chip:"Exynos 7580",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"2600mAh",tela:"5.5\" Full HD Super AMOLED",ano:"2016"},
,{score:34,name:"Samsung Galaxy J2 (2016)",chip:"Exynos 7570",ram:"1.5GB",storage:"8GB",camera:"5MP + 2MP",battery:"2000mAh",tela:"4.7\" HVGA IPS",ano:"2016"},
,{score:33,name:"Samsung Galaxy J1 Ace",chip:"Exynos 7570",ram:"1.5GB",storage:"16GB",camera:"8MP + 5MP",battery:"2100mAh",tela:"4.8\" HD IPS",ano:"2016"},
,{score:35,name:"Samsung Galaxy Grand Max",chip:"Exynos 7580",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.7\" HD Super AMOLED",ano:"2016"},
,{score:32,name:"Samsung Galaxy On5",chip:"Exynos 7570",ram:"1.5GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"4.8\" HD IPS",ano:"2016"},
,{score:35,name:"Samsung Galaxy On7",chip:"Exynos 7580",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.5\" HD Super AMOLED",ano:"2016"},
,{score:40,name:"Samsung Galaxy On7 Pro",chip:"Exynos 7580",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.5\" FHD Super AMOLED",ano:"2016"},
,{score:25,name:"Samsung Galaxy J7 Nxt",chip:"Exynos 7570",ram:"2GB",storage:"16GB",camera:"13MP",battery:"2500mAh",tela:"5.5\" HD ADC",ano:"2016"},
,{score:22,name:"Samsung Galaxy Note 4",chip:"Snapdragon 805 / Exynos 7420",ram:"3GB",storage:"32GB",camera:"16MP + 5MP",battery:"3220mAh",tela:"5.7\" QHD Super AMOLED",ano:"2016"},
,{score:20,name:"Samsung Galaxy S6",chip:"Exynos 7420",ram:"3GB",storage:"32GB",camera:"16MP + 5MP",battery:"2550mAh",tela:"5.1\" QHD Super AMOLED",ano:"2016"},
,{score:22,name:"Samsung Galaxy S6 Edge",chip:"Exynos 7420",ram:"3GB",storage:"32GB",camera:"16MP + 5MP",battery:"2550mAh",tela:"5.1\" QHD Super AMOLED",ano:"2016"},
,{score:18,name:"Samsung Galaxy S6 Active",chip:"Snapdragon 807",ram:"3GB",storage:"32GB",camera:"16MP + 5MP",battery:"3000mAh",tela:"5.1\" QHD Super AMOLED",ano:"2016"},

// === NOVO: iPhone 2016 (faltando) ===
,{score:62,name:"iPhone 6S",chip:"A9",ram:"2GB",storage:"16GB",camera:"12MP",battery:"1715mAh",tela:"4.7\" Retina HD",ano:"2016"},
,{score:60,name:"iPhone 6S Plus",chip:"A9",ram:"2GB",storage:"16GB",camera:"12MP",battery:"2750mAh",tela:"5.5\" Retina HD",ano:"2016"},
,{score:48,name:"iPhone 6",chip:"A8",ram:"1GB",storage:"16GB",camera:"8MP",battery:"1810mAh",tela:"4.7\" Retina HD",ano:"2016"},
,{score:44,name:"iPhone 6 Plus",chip:"A8",ram:"1GB",storage:"16GB",camera:"8MP",battery:"2915mAh",tela:"5.5\" Retina HD",ano:"2016"},

// === NOVO: Sony Xperia 2016 (faltando) ===
,{score:50,name:"Sony Xperia X",chip:"Snapdragon 652",ram:"2.7GB",storage:"32GB",camera:"23MP + 5MP",battery:"2500mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:52,name:"Sony Xperia X Compact",chip:"Snapdragon 652",ram:"2.7GB",storage:"32GB",camera:"23MP + 5MP",battery:"2400mAh",tela:"4.6\" FHD IPS",ano:"2016"},
,{score:55,name:"Sony Xperia X Performance",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"23MP + 5MP",battery:"2500mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:48,name:"Sony Xperia XA",chip:"Snapdragon 616",ram:"2GB",storage:"32GB",camera:"13MP + 5MP",battery:"2200mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:50,name:"Sony Xperia XA Ultra",chip:"MediaTek Helio P10",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2900mAh",tela:"6\" FHD IPS",ano:"2016"},
,{score:45,name:"Sony Xperia ZL3",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"13.2MP + 13.2MP",battery:"2900mAh",tela:"5\" FHD IPS",ano:"2016"},
,{score:50,name:"Sony Xperia Z5",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"23MP + 5MP",battery:"2700mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:45,name:"Sony Xperia Z5 Compact",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"21MP",battery:"2200mAh",tela:"4.6\" FHD IPS",ano:"2016"},
,{score:48,name:"Sony Xperia Z5 Premium",chip:"Snapdragon 820",ram:"3GB",storage:"4K/UHD",camera:"23MP",battery:"2800mAh",tela:"5.5\" 4K IPS Triluminos",ano:"2016"},

// === NOVO: HTC 2016 (faltando) ===
,{score:40,name:"HTC One A9",chip:"Snapdragon 616",ram:"2GB",storage:"16GB",camera:"13MP + 2MP",battery:"2200mAh",tela:"5\" FHD IPS",ano:"2016"},
,{score:30,name:"HTC Desire 826s",chip:"MediaTek Helio P10",ram:"2GB",storage:"8GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.7\" FHD IPS",ano:"2016"},
,{score:28,name:"HTC First",chip:"Snapdragon 410",ram:"1GB",storage:"8GB",camera:"5MP",battery:"1800mAh",tela:"4.7\" HD LCD",ano:"2016"},
,{score:22,name:"HTC M10",chip:"Snapdragon 410",ram:"1GB",storage:"8GB",camera:"5MP + 2MP",battery:"2200mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:25,name:"HTC Desire 626s",chip:"Snapdragon 410",ram:"1GB",storage:"8GB",camera:"5MP",battery:"2100mAh",tela:"4.7\" HD IPS",ano:"2016"},

// === NOVO: LG 2016 (faltando) ===
,{score:55,name:"LG V10",chip:"Snapdragon 808",ram:"4GB",storage:"32GB",camera:"16MP + 5MP",battery:"3000mAh",tela:"5.75\" FHD IPS",ano:"2016"},
,{score:58,name:"LG G4",chip:"Snapdragon 808",ram:"3GB",storage:"32GB",camera:"16MP + 8MP",battery:"3000mAh",tela:"5.5\" QHD IPS",ano:"2016"},
,{score:48,name:"LG V20",chip:"Snapdragon 820",ram:"4GB",storage:"32GB",camera:"16MP + 5MP",battery:"4000mAh",tela:"5.7\" QHD IPS",ano:"2016"},
,{score:40,name:"LG Stylus 2",chip:"Snapdragon 415",ram:"2GB",storage:"16GB",camera:"13MP + 8MP",battery:"3000mAh",tela:"5.7\" FHD IPS",ano:"2016"},
,{score:28,name:"LG Spirit",chip:"Snapdragon 205",ram:"1GB",storage:"8GB",camera:"5MP",battery:"2000mAh",tela:"4.7\" HD IPS",ano:"2016"},
,{score:32,name:"LG Leon",chip:"Snapdragon 210",ram:"1GB",storage:"8GB",camera:"5MP",battery:"2000mAh",tela:"4.7\" HVGA IPS",ano:"2016"},
,{score:30,name:"LG Optimus L70",chip:"Qualcomm Snapdragon 205",ram:"1GB",storage:"8GB",camera:"5MP",battery:"1800mAh",tela:"4.7\" HVGA IPS",ano:"2016"},

// === NOVO: Xiaomi/Redmi 2016 (faltando) ===
,{score:45,name:"Xiaomi Mi 5c",chip:"Qualcomm Snapdragon 616",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"3010mAh",tela:"5.15\" FHD AMOLED",ano:"2016"},
,{score:48,name:"Xiaomi Mi Note",chip:"Snapdragon 820",ram:"4GB",storage:"64GB",camera:"16MP + 8MP",battery:"3520mAh",tela:"5.7\" QHD AMOLED",ano:"2016"},
,{score:50,name:"Xiaomi Mi Note Pro",chip:"Snapdragon 820",ram:"4GB",storage:"64GB",camera:"16MP + 8MP",battery:"3520mAh",tela:"5.7\" QHD AMOLED",ano:"2016"},
,{score:40,name:"Xiaomi Mi 4c",chip:"Snapdragon 808",ram:"3GB",storage:"64GB",camera:"13MP + 8MP",battery:"3000mAh",tela:"5.15\" FHD AMOLED",ano:"2016"},
,{score:36,name:"Xiaomi Mi Max",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"8MP",battery:"4850mAh",tela:"6.44\" FHD IPS",ano:"2016"},
,{score:38,name:"Xiaomi Mi 5",chip:"Snapdragon 820",ram:"4GB",storage:"128GB",camera:"16MP + 8MP",battery:"3000mAh",tela:"5.15\" FHD AMOLED",ano:"2016"},
,{score:40,name:"Redmi 4",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"4000mAh",tela:"5.5\" HD IPS",ano:"2016"},
,{score:30,name:"Redmi 4A",chip:"MediaTek Helio A22",ram:"2GB",storage:"16GB",camera:"12MP + 2MP",battery:"3600mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:42,name:"Redmi Note 4",chip:"Snapdragon 636",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"4100mAh",tela:"5.5\" HD IPS",ano:"2016"},
,{score:35,name:"Redmi Note 4X",chip:"Snapdragon 430",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"4100mAh",tela:"5.5\" HD IPS",ano:"2016"},
,{score:34,name:"Redmi 3S",chip:"Snapdragon 430",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"4000mAh",tela:"5.5\" HD IPS",ano:"2016"},
,{score:32,name:"Redmi 3S Prime",chip:"Snapdragon 430",ram:"3GB",storage:"64GB",camera:"12MP + 5MP",battery:"4000mAh",tela:"5.5\" HD IPS",ano:"2016"},
,{score:38,name:"Hongmi 4",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"8MP",battery:"4000mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:30,name:"Hongmi 4A",chip:"MediaTek Helio A22",ram:"2GB",storage:"16GB",camera:"8MP",battery:"3600mAh",tela:"5\" HD IPS",ano:"2016"},

// === NOVO: OnePlus 2016 (faltando) ===
,{score:55,name:"OnePlus 3T",chip:"Snapdragon 821",ram:"6GB",storage:"64GB",camera:"16MP + 16MP",battery:"3000mAh",tela:"5.5\" FHD AMOLED",ano:"2016"},

// === NOVO: Huawei/Honor 2016 (faltando) ===
,{score:55,name:"Huawei P9",chip:"Kirin 955",ram:"3GB",storage:"32GB",camera:"12MP + 12MP",battery:"3000mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:53,name:"Huawei P9 Plus",chip:"Kirin 955",ram:"3GB",storage:"32GB",camera:"12MP + 12MP",battery:"3500mAh",tela:"5.5\" 2K ADS IPS",ano:"2016"},
,{score:50,name:"Huawei P9 Lite",chip:"Kirin 655",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2600mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:58,name:"Huawei Mate 8",chip:"Kirin 950",ram:"4GB",storage:"32GB",camera:"12MP + 2MP",battery:"4000mAh",tela:"5.9\" FHD IPS",ano:"2016"},
,{score:48,name:"Huawei Mate 8 Pro",chip:"Kirin 950",ram:"4GB",storage:"32GB",camera:"16MP + 2MP",battery:"4000mAh",tela:"5.9\" FHD IPS",ano:"2016"},
,{score:40,name:"Huawei Nova",chip:"Snapdragon 616",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:42,name:"Huawei Nova Plus",chip:"Snapdragon 616",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3200mAh",tela:"5.5\" FHD IPS",ano:"2016"},
,{score:52,name:"Honor 6X",chip:"Kirin 655",ram:"4GB",storage:"64GB",camera:"12MP + 2MP",battery:"3750mAh",tela:"5.7\" FHD IPS",ano:"2016"},
,{score:40,name:"Honor 7",chip:"Kirin 955",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.2\" FHD 4G",ano:"2016"},
,{score:38,name:"Honor 7A",chip:"Kirin 655",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.5\" HD IPS",ano:"2016"},

// === NOVO: Motorola 2016 (faltando) ===
,{score:40,name:"Moto G4",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2800mAh",tela:"5.5\" HD IPS",ano:"2016"},
,{score:36,name:"Moto G4 Play",chip:"MediaTek Helio P10",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:42,name:"Moto G4 Plus",chip:"Snapdragon 615",ram:"2GB",storage:"16GB",camera:"16MP + 5MP",battery:"3000mAh",tela:"5.5\" FHD IPS",ano:"2016"},
,{score:38,name:"Moto G4 Silver",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2800mAh",tela:"5.5\" HD IPS",ano:"2016"},
,{score:45,name:"Moto X Play",chip:"Snapdragon 615",ram:"3GB",storage:"32GB",camera:"21MP + 5MP",battery:"3630mAh",tela:"5.5\" FHD IPS",ano:"2016"},
,{score:42,name:"Moto X Pure",chip:"Snapdragon 810",ram:"3GB",storage:"32GB",camera:"21MP + 5MP",battery:"3700mAh",tela:"5.7\" QHD IPS",ano:"2016"},
,{score:44,name:"Moto X Force",chip:"Snapdragon 810",ram:"3GB",storage:"32GB",camera:"21MP + 5MP",battery:"3700mAh",tela:"5.7\" QHD IPS",ano:"2016"},
,{score:48,name:"Moto Z",chip:"Snapdragon 820",ram:"4GB",storage:"32GB",camera:"21MP + 16MP",battery:"3500mAh",tela:"5.5\" FHD IPS",ano:"2016"},
,{score:45,name:"Moto Z Play",chip:"Snapdragon 810",ram:"3GB",storage:"32GB",camera:"21MP + 16MP",battery:"3500mAh",tela:"5.5\" FHD IPS",ano:"2016"},
,{score:32,name:"Moto G4 Plus 32GB",chip:"Snapdragon 615",ram:"2GB",storage:"32GB",camera:"16MP + 5MP",battery:"3000mAh",tela:"5.5\" FHD IPS",ano:"2016"},

// === NOVO: Nokia/HMD 2016 (faltando) ===
,{score:35,name:"Nokia 6 (2016)",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5.5\" FHD IPS",ano:"2016"},
,{score:32,name:"Nokia 5 (2016)",chip:"Snapdragon 410",ram:"2GB",storage:"8GB",camera:"13MP",battery:"2150mAh",tela:"5.2\" HD IPS",ano:"2016"},
,{score:28,name:"Nokia 3 (2016)",chip:"Snapdragon 410",ram:"2GB",storage:"8GB",camera:"8MP",battery:"2100mAh",tela:"4.7\" HD IPS",ano:"2016"},
,{score:22,name:"Nokia 2 (2016)",chip:"Snapdragon 215",ram:"1GB",storage:"8GB",camera:"5MP",battery:"2000mAh",tela:"4.3\" HVGA IPS",ano:"2016"},
,{score:20,name:"Nokia 1 (2016)",chip:"Snapdragon 212",ram:"1GB",storage:"4GB",camera:"5MP",battery:"1200mAh",tela:"4.3\" HVGA IPS",ano:"2016"},
,{score:24,name:"Nokia 105",chip:"MediaTek 6592",ram:"0.15GB",storage:"4GB",camera:"3.2MP",battery:"1020mAh",tela:"2.4\" QVGA TFT",ano:"2016"},
,{score:30,name:"Nokia 3310 4G",chip:"Qualcomm 205",ram:"0.5GB",storage:"4GB",camera:"2MP",battery:"1200mAh",tela:"2.8\" HVGA TFT",ano:"2016"},
,{score:28,name:"Nokia 630",chip:"Snapdragon 215",ram:"1GB",storage:"8GB",camera:"5MP",battery:"2000mAh",tela:"4\" HVGA TFT",ano:"2016"},

// === NOVO: Oppo 2016 (faltando) ===
,{score:35,name:"Oppo A5 (2016)",chip:"MediaTek Helio P10",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2550mAh",tela:"5.2\" HD IPS",ano:"2016"},
,{score:38,name:"Oppo A3 (2016)",chip:"MediaTek Helio P10",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:32,name:"Oppo R8",chip:"Snapdragon 205",ram:"1GB",storage:"8GB",camera:"5MP",battery:"2000mAh",tela:"4.7\" HVGA IPS",ano:"2016"},
,{score:42,name:"Oppo Find 5",chip:"MediaTek Helio X10",ram:"3GB",storage:"32GB",camera:"13MP",battery:"2600mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:44,name:"Oppo Find 7a",chip:"Snapdragon 616",ram:"3GB",storage:"32GB",camera:"13MP",battery:"2600mAh",tela:"5.5\" FHD IPS",ano:"2016"},

// === NOVO: Alcatel/BlackBerry/Outras 2016 (faltando) ===
,{score:35,name:"Alcatel OneTouch Idol 4S",chip:"Snapdragon 616",ram:"2GB",storage:"16GB",camera:"13MP + 8MP",battery:"2600mAh",tela:"5.2\" FHD IPS",ano:"2016"},
,{score:32,name:"Alcatel Onetouch Pixi 4",chip:"MediaTek Helio P10",ram:"1GB",storage:"8GB",camera:"8MP",battery:"2100mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:50,name:"BlackBerry Priv",chip:"Snapdragon 808",ram:"3GB",storage:"32GB",camera:"18MP + 5MP",battery:"3000mAh",tela:"5.4\" QHD IPS",ano:"2016"},
,{score:42,name:"BlackBerry DTEK50",chip:"Snapdragon 615",ram:"2GB",storage:"8GB",camera:"13MP",battery:"2500mAh",tela:"5.2\" HD IPS",ano:"2016"},
,{score:45,name:"BlackBerry DTEK60",chip:"Snapdragon 808",ram:"3GB",storage:"16GB",camera:"18MP",battery:"2850mAh",tela:"5.4\" QHD IPS",ano:"2016"},
,{score:48,name:"BlackBerry Passport",chip:"Snapdragon 808",ram:"3GB",storage:"16GB",camera:"18MP + 5MP",battery:"3000mAh",tela:"4.5\" QHD IPS (quad"),ano:"2016"},
,{score:50,name:"Vivo V3",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2200mAh",tela:"5\" FHD IPS",ano:"2016"},
,{score:48,name:"Vivo V1 Max",chip:"Snapdragon 650",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"2500mAh",tela:"5\" FHD IPS",ano:"2016"},
,{score:46,name:"Vivo Y51A",chip:"MediaTek Helio P10",ram:"2GB",storage:"16GB",camera:"13MP + 2MP",battery:"2300mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:38,name:"Vivo Y55A",chip:"Snapdragon 410",ram:"2GB",storage:"8GB",camera:"8MP",battery:"2450mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:42,name:"Vivo Y53A",chip:"Snapdragon 410",ram:"2GB",storage:"8GB",camera:"8MP",battery:"2400mAh",tela:"5\" HD IPS",ano:"2016"},

// === NOVO: Asus Zenfone 2016 (faltando) ===
,{score:50,name:"Asus Zenfone 2",chip:"Intel Atom Z3580",ram:"4GB",storage:"32GB",camera:"13MP + 5MP",battery:"4150mAh",tela:"5.5\" FHD IPS",ano:"2016"},
,{score:42,name:"Asus Zenfone 2 Laser",chip:"Intel Atom Z3580",ram:"2GB",storage:"16GB",camera:"13MP + 2MP",battery:"2800mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:45,name:"Asus Zenfone 5",chip:"Snapdragon 808",ram:"3GB",storage:"16GB",camera:"20.1MP + 5MP",battery:"2250mAh",tela:"4.7\" FHD IPS",ano:"2016"},

// === NOVO: Lenovo/Karbonn/Smartphone básico 2016 (faltando) ===
,{score:40,name:"Lenovo Vibe P1",chip:"Snapdragon 615",ram:"3GB",storage:"16GB",camera:"13MP + 8MP",battery:"4000mAh",tela:"5.7\" FHD IPS",ano:"2016"},
,{score:35,name:"Lenovo Vibe P1m",chip:"Snapdragon 415",ram:"2GB",storage:"16GB",camera:"13MP + 8MP",battery:"4000mAh",tela:"5.7\" HD IPS",ano:"2016"},
,{score:38,name:"Lenovo Vibe A",chip:"Snapdragon 410",ram:"2GB",storage:"8GB",camera:"8MP",battery:"2300mAh",tela:"4.5\" HD IPS",ano:"2016"},
,{score:36,name:"Karbonn Titanium S1 Plus",chip:"Snapdragon 410",ram:"2GB",storage:"8GB",camera:"5MP + 2MP",battery:"2500mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:34,name:"Karbonn A5",chip:"Snapdragon 205",ram:"2GB",storage:"8GB",camera:"8MP",battery:"2000mAh",tela:"4.5\" HD IPS",ano:"2016"},
,{score:32,name:"Swiper Apollo Neo",chip:"Exynos 7570",ram:"2GB",storage:"8GB",camera:"5MP",battery:"2000mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:28,name:"Ulefone Metal",chip:"Snapdragon 410",ram:"2GB",storage:"8GB",camera:"13MP + 2MP",battery:"2500mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:25,name:"Coolpad Note 5",chip:"Snapdragon 200",ram:"1GB",storage:"8GB",camera:"5MP",battery:"2100mAh",tela:"4.5\" HVGA IPS",ano:"2016"},
,{score:20,name:"Yu Yureka",chip:"Snapdragon 616",ram:"2GB",storage:"8GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:26,name:"Yu Yureka+",chip:"Snapdragon 616",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"3200mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:22,name:"Lava Iris 182",chip:"Snapdragon 205",ram:"1GB",storage:"8GB",camera:"5MP",battery:"1500mAh",tela:"3.7\" HVGA IPS",ano:"2016"},
,{score:26,name:"Lava Z50",chip:"Snapdragon 410",ram:"1.5GB",storage:"8GB",camera:"5MP",battery:"2000mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:30,name:"Lava Iris 406",chip:"Snapdragon 410",ram:"1.5GB",storage:"8GB",camera:"8MP",battery:"2000mAh",tela:"5\" HD IPS",ano:"2016"},
,{score:22,name:"Lava Iris 509",chip:"Snapdragon 205",ram:"1GB",storage:"8GB",camera:"5MP",battery:"1500mAh",tela:"4.7\" HVGA IPS",ano:"2016"},
,{score:28,name:"Lava Iris 501",chip:"Snapdragon 205",ram:"1GB",storage:"4GB",camera:"2MP",battery:"1200mAh",tela:"3.2\" HVGA TFT",ano:"2016"},
""".strip()

# Inserir após a última linha de smartphone (ASUS Zenfone 3 S) antes do fechamento do array
# Padrão: ",{score:50,name:"Asus Zenfone 3 S",...}\n,\n],\ncpus:["

old = ',{score:50,name:"Asus Zenfone 3 S",chip:"Snapdragon 650",ram:"4GB",storage:"64GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.7\\" FHD+ Super AMOLED",ano:"2016"},'

if old in content:
    # Encontrar a posição para inserir (após 2016 A series)
    castro = '\n,\n],\ncpus:['
    idx = content.find(castro)
    if idx > 0:
        content = content[:idx] + novos_2016 + '\n' + content[idx:]
        print(f"Adicionados {novos_2016.count(chr(10))+1} smartphones 2016")
        
        with open('C:/Users/jo/Desktop/TechSpecsGW/data.js', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Concluído!")
    else:
        print("Padrão de fechamento do array não encontrado")
else:
    print("Linha de anchor não encontrada")
