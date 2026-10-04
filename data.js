const data = {
smartphones:[
{score:98,name:"Samsung Galaxy S25 Ultra",chip:"Snapdragon 8 Elite for Galaxy",ram:"12GB LPDDR5X",storage:"512GB UFS 4.0",camera:"200MP + 12MP + 10MP + 10MP",battery:"5000mAh",tela:"6.9\" QHD+ LTPO 120Hz",ano:"2025"},
{score:92,name:"iPhone 16 Pro Max",chip:"A18 Pro",ram:"8GB",storage:"512GB NVMe",camera:"48MP + 48MP + 12MP",battery:"4685mAh",tela:"6.9\" Super Retina XDR 120Hz",ano:"2024"},
{score:80,name:"Google Pixel 9 Pro",chip:"Tensor G4",ram:"12GB",storage:"256GB",camera:"50MP + 48MP + 48MP",battery:"4855mAh",tela:"6.4\" LTPO OLED 120Hz",ano:"2024"},
{score:98,name:"Xiaomi 15",chip:"Snapdragon 8 Elite",ram:"12GB",storage:"512GB",camera:"50MP + 50MP + 50MP",battery:"5400mAh",tela:"6.36\" LTPO AMOLED 120Hz",ano:"2024"},
{score:100,name:"OnePlus 13",chip:"Snapdragon 8 Elite",ram:"16GB",storage:"512GB",camera:"50MP + 50MP + 50MP",battery:"6000mAh Si/C",tela:"6.82\" QHD+ LTPO 120Hz",ano:"2024"},
{score:98,name:"Honor Magic 7 Pro",chip:"Snapdragon 8 Elite",ram:"12GB",storage:"512GB",camera:"50MP + 200MP + 50MP",battery:"5850mAh Si/C",tela:"6.8\" LTPO AMOLED 120Hz",ano:"2024"},
{score:90,name:"Samsung Galaxy Z Fold6",chip:"Snapdragon 8 Gen 3 for Galaxy",ram:"12GB",storage:"512GB",camera:"50MP + 12MP + 10MP",battery:"4400mAh",tela:"7.6\" Foldable QHD+ 120Hz",ano:"2024"},
{score:90,name:"Samsung Galaxy S24 Ultra",chip:"Snapdragon 8 Gen 3 for Galaxy",ram:"12GB LPDDR5X",storage:"512GB UFS 4.0",camera:"200MP + 12MP + 10MP + 10MP",battery:"5000mAh",tela:"6.8\" QHD+ LTPO 120Hz",ano:"2024"},
{score:80,name:"Samsung Galaxy S23 Ultra",chip:"Snapdragon 8 Gen 2 for Galaxy",ram:"12GB LPDDR5X",storage:"512GB UFS 4.0",camera:"200MP + 12MP + 10MP + 10MP",battery:"5000mAh",tela:"6.8\" QHD+ LTPO 120Hz",ano:"2023"},
{score:74,name:"Samsung Galaxy S22 Ultra",chip:"Snapdragon 8 Gen 1",ram:"12GB LPDDR5",storage:"256GB UFS 3.1",camera:"108MP + 12MP + 10MP + 10MP",battery:"5000mAh",tela:"6.8\" QHD+ 120Hz",ano:"2022"},
{score:84,name:"iPhone 15 Pro Max",chip:"A17 Pro",ram:"8GB",storage:"256GB NVMe",camera:"48MP + 12MP + 12MP",battery:"4422mAh",tela:"6.7\" Super Retina XDR 120Hz",ano:"2023"},
{score:72,name:"iPhone 14 Pro Max",chip:"A16 Bionic",ram:"6GB",storage:"256GB NVMe",camera:"48MP + 12MP + 12MP",battery:"4323mAh",tela:"6.7\" Super Retina XDR 120Hz",ano:"2022"},
{score:74,name:"Google Pixel 8 Pro",chip:"Tensor G3",ram:"12GB",storage:"256GB",camera:"50MP + 48MP + 48MP",battery:"5050mAh",tela:"6.7\" LTPO OLED 120Hz",ano:"2023"},
{score:69,name:"Google Pixel 7 Pro",chip:"Tensor G2",ram:"12GB",storage:"128GB",camera:"50MP + 48MP + 48MP",battery:"5000mAh",tela:"6.7\" LTPO OLED 120Hz",ano:"2022"},
{score:90,name:"Xiaomi 14",chip:"Snapdragon 8 Gen 3",ram:"12GB",storage:"512GB",camera:"50MP + 50MP + 50MP",battery:"4610mAh",tela:"6.36\" LTPO AMOLED 120Hz",ano:"2023"},
{score:78,name:"Xiaomi 13",chip:"Snapdragon 8 Gen 2",ram:"12GB",storage:"256GB",camera:"50MP + 50MP + 12MP",battery:"4500mAh",tela:"6.36\" AMOLED 120Hz",ano:"2022"},
{score:92,name:"OnePlus 12",chip:"Snapdragon 8 Gen 3",ram:"16GB",storage:"512GB",camera:"50MP + 64MP + 50MP",battery:"5400mAh",tela:"6.82\" QHD+ LTPO 120Hz",ano:"2023"},
{score:78,name:"OnePlus 11",chip:"Snapdragon 8 Gen 2",ram:"12GB",storage:"256GB",camera:"50MP + 48MP + 32MP",battery:"5000mAh",tela:"6.7\" QHD+ LTPO 120Hz",ano:"2023"},
{score:82,name:"OPPO Find X6 Pro",chip:"Snapdragon 8 Gen 2",ram:"16GB",storage:"512GB",camera:"50MP + 50MP + 50MP",battery:"5000mAh",tela:"6.82\" QHD+ LTPO 120Hz",ano:"2023"},
{score:70,name:"OPPO Find X5 Pro",chip:"Snapdragon 8 Gen 1",ram:"12GB",storage:"256GB",camera:"50MP + 50MP + 50MP",battery:"5000mAh",tela:"6.7\" QHD+ LTPO 120Hz",ano:"2022"},
{score:55,name:"Samsung Galaxy S10+",chip:"Snapdragon 855",ram:"8GB",storage:"128GB",camera:"12MP + 12MP + 16MP",battery:"4100mAh",tela:"6.4\" QHD+ Super AMOLED",ano:"2019"},
{score:52,name:"iPhone XS Max",chip:"A12 Bionic",ram:"4GB",storage:"64GB",camera:"12MP + 12MP",battery:"3500mAh",tela:"6.5\" Super Retina",ano:"2018"},
{score:45,name:"Google Pixel 3 XL",chip:"Snapdragon 845",ram:"4GB",storage:"64GB",camera:"12.2MP",battery:"3430mAh",tela:"6.3\" P-OLED",ano:"2018"},
{score:63,name:"Samsung Galaxy S20 Ultra",chip:"Snapdragon 865",ram:"12GB",storage:"128GB",camera:"108MP + 48MP + 12MP",battery:"5000mAh",tela:"6.9\" QHD+ Dynamic AMOLED",ano:"2020"},
{score:61,name:"iPhone 12 Pro Max",chip:"A14 Bionic",ram:"6GB",storage:"128GB",camera:"12MP + 12MP + 12MP",battery:"3687mAh",tela:"6.7\" Super Retina XDR",ano:"2020"},
{score:65,name:"Xiaomi Mi 11",chip:"Snapdragon 888",ram:"8GB",storage:"128GB",camera:"108MP",battery:"4600mAh",tela:"6.81\" QHD+ AMOLED",ano:"2021"},
{score:68,name:"Samsung Galaxy S21 Ultra",chip:"Snapdragon 888",ram:"12GB",storage:"256GB",camera:"108MP + 10MP + 10MP + 10MP",battery:"5000mAh",tela:"6.8\" QHD+ Dynamic AMOLED",ano:"2021"},
{score:100,name:"Samsung Galaxy S26 Ultra",chip:"Snapdragon 8 Elite 2 for Galaxy",ram:"16GB LPDDR5X",storage:"512GB UFS 4.0",camera:"200MP + 50MP + 50MP + 12MP",battery:"5500mAh Si/C",tela:"6.9\" QHD+ LTPO 144Hz",ano:"2026"},
{score:98,name:"iPhone 17 Pro Max",chip:"A19 Pro",ram:"12GB",storage:"512GB NVMe",camera:"48MP + 48MP + 48MP",battery:"5088mAh",tela:"6.9\" Super Retina XDR 120Hz",ano:"2026"},
{score:86,name:"Google Pixel 10 Pro",chip:"Tensor G5",ram:"16GB",storage:"256GB",camera:"50MP + 48MP + 48MP",battery:"4950mAh",tela:"6.3\" LTPO OLED 120Hz",ano:"2025"},
{score:100,name:"Xiaomi 16 Ultra",chip:"Snapdragon 8 Elite 2",ram:"16GB",storage:"1TB",camera:"50MP + 50MP + 50MP + 200MP",battery:"6000mAh Si/C",tela:"6.8\" LTPO AMOLED 144Hz",ano:"2026"},
{score:100,name:"iPhone 18 Pro",chip:"A20",ram:"12GB",storage:"512GB NVMe",camera:"48MP + 48MP + 12MP",battery:"4685mAh",tela:"6.3\" LTPO OLED 120Hz",ano:"2026"},
{score:98,name:"iPhone 18 Pro Max",chip:"A20",ram:"12GB",storage:"1TB NVMe",camera:"48MP + 48MP + 48MP periscópio 5X",battery:"5567mAh",tela:"6.9\" LTPO OLED 120Hz",ano:"2026"},
{score:90,name:"Samsung Galaxy S26 FE",chip:"Exynos 2500",ram:"12GB LPDDR5X",storage:"256GB UFS 4.0",camera:"50MP + 12MP + 8MP",battery:"4900mAh",tela:"6.7\" FHD+ AMOLED 2X 120Hz",ano:"2026"},
{score:97,name:"Xiaomi 18 Pro",chip:"Snapdragon 8 Elite 2",ram:"16GB",storage:"512GB",camera:"200MP + 200MP + 50MP",battery:"5400mAh Si/C",tela:"6.7\" LTPO AMOLED 144Hz",ano:"2026"},
{score:88,name:"Poco F9 Pro",chip:"Snapdragon 8 Gen 3",ram:"12GB LPDDR5X",storage:"256GB UFS 4.0",camera:"50MP + 8MP + 2MP",battery:"5200mAh",tela:"6.67\" AMOLED 144Hz",ano:"2026"},
{score:78,name:"Vivo T5 5G",chip:"Dimensity 8400",ram:"8GB LPDDR5X",storage:"128GB",camera:"50MP + 8MP",battery:"5000mAh",tela:"6.78\" AMOLED 120Hz",ano:"2026"},
{score:96,name:"Samsung Galaxy S25",chip:"Snapdragon 8 Elite for Galaxy",ram:"12GB LPDDR5X",storage:"256GB UFS 4.0",camera:"50MP + 12MP + 10MP",battery:"4000mAh",tela:"6.2\" FHD+ LTPO 120Hz",ano:"2025"},
{score:90,name:"iPhone 16 Pro",chip:"A18 Pro",ram:"8GB",storage:"256GB NVMe",camera:"48MP + 48MP + 12MP",battery:"3582mAh",tela:"6.3\" Super Retina XDR 120Hz",ano:"2024"},
{score:79,name:"Google Pixel 9",chip:"Tensor G4",ram:"12GB",storage:"128GB",camera:"50MP + 48MP",battery:"4700mAh",tela:"6.3\" LTPO OLED 120Hz",ano:"2024"},
{score:88,name:"vivo X200 Pro",chip:"Dimensity 9400",ram:"16GB",storage:"512GB",camera:"50MP + 50MP + 50MP",battery:"6000mAh",tela:"6.78\" LTPO AMOLED 120Hz",ano:"2024"},
{score:76,name:"Nothing Phone (2)",chip:"Snapdragon 8+ Gen 1",ram:"12GB",storage:"256GB",camera:"50MP + 50MP",battery:"4700mAh",tela:"6.7\" FHD+ LTPO 120Hz",ano:"2023"},
{score:66,name:"iPhone 13 Pro Max",chip:"A15 Bionic",ram:"6GB",storage:"256GB NVMe",camera:"12MP + 12MP + 12MP",battery:"4352mAh",tela:"6.7\" Super Retina XDR 120Hz",ano:"2021"},
{score:68,name:"OnePlus 9 Pro",chip:"Snapdragon 888",ram:"12GB",storage:"256GB",camera:"48MP + 50MP + 50MP + 2MP",battery:"4500mAh",tela:"6.7\" QHD+ LTPO 120Hz",ano:"2021"},
{score:70,name:"Xiaomi Mi 11 Ultra",chip:"Snapdragon 888",ram:"12GB",storage:"512GB",camera:"50MP + 48MP + 48MP",battery:"5000mAh",tela:"6.81\" QHD+ AMOLED",ano:"2021"},
{score:56,name:"iPhone 11 Pro Max",chip:"A13 Bionic",ram:"4GB",storage:"256GB",camera:"12MP + 12MP + 12MP",battery:"3969mAh",tela:"6.5\" Super Retina XDR",ano:"2019"},
{score:58,name:"OnePlus 7 Pro",chip:"Snapdragon 855",ram:"12GB",storage:"256GB",camera:"48MP + 16MP + 5MP",battery:"4000mAh",tela:"6.67\" QHD+ Fluid AMOLED 90Hz",ano:"2019"},
{score:50,name:"Samsung Galaxy Note 9",chip:"Exynos 9810",ram:"8GB",storage:"256GB",camera:"12MP + 12MP",battery:"4000mAh",tela:"6.4\" QHD+ Super AMOLED",ano:"2018"},
{score:51,name:"OnePlus 6T",chip:"Snapdragon 845",ram:"8GB",storage:"128GB",camera:"16MP + 20MP",battery:"3700mAh",tela:"6.41\" FHD+ AMOLED",ano:"2018"},
{score:38,name:"Samsung Galaxy S7",chip:"Snapdragon 820",ram:"4GB",storage:"128GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"5.1\" QHD Super AMOLED",ano:"2016"},
{score:35,name:"Samsung Galaxy Note 7",chip:"Snapdragon 820",ram:"4GB",storage:"128GB",camera:"12MP + 12MP",battery:"3500mAh",tela:"5.7\" QHD Super AMOLED",ano:"2016"},
{score:45,name:"iPhone 7",chip:"A10 Fusion",ram:"2GB",storage:"128GB",camera:"12MP",battery:"1960mAh",tela:"4.7\" Retina HD",ano:"2016"},
{score:47,name:"iPhone 7 Plus",chip:"A10 Fusion",ram:"3GB",storage:"256GB",camera:"12MP + 12MP",battery:"2900mAh",tela:"5.5\" Retina HD",ano:"2016"},
{score:39,name:"Google Pixel",chip:"Snapdragon 821",ram:"4GB",storage:"128GB",camera:"12.3MP",battery:"2770mAh",tela:"5\" QHD AMOLED",ano:"2016"},
{score:37,name:"OnePlus 3",chip:"Snapdragon 820",ram:"6GB",storage:"128GB",camera:"16MP",battery:"3000mAh",tela:"5.5\" FHD AMOLED",ano:"2016"},
{score:31,name:"LG G5",chip:"Snapdragon 820",ram:"4GB",storage:"32GB",camera:"16MP + 8MP",battery:"2800mAh",tela:"5.3\" QHD IPS",ano:"2016"},
{score:35,name:"HTC 10",chip:"Snapdragon 820",ram:"4GB",storage:"128GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"5.5\" QHD Super LCD 3",ano:"2016"},
{score:39,name:"Samsung Galaxy S8",chip:"Snapdragon 835",ram:"4GB",storage:"64GB",camera:"12MP",battery:"3000mAh",tela:"5.8\" QHD+ Super AMOLED",ano:"2017"},
{score:41,name:"Samsung Galaxy S8+",chip:"Snapdragon 835",ram:"4GB",storage:"128GB",camera:"12MP",battery:"3500mAh",tela:"6.2\" QHD+ Super AMOLED",ano:"2017"},
{score:43,name:"Samsung Galaxy Note 8",chip:"Snapdragon 835",ram:"6GB",storage:"128GB",camera:"12MP + 12MP",battery:"3300mAh",tela:"6.3\" QHD+ Super AMOLED",ano:"2017"},
{score:48,name:"iPhone X",chip:"A11 Bionic",ram:"3GB",storage:"256GB",camera:"12MP + 12MP",battery:"2716mAh",tela:"5.8\" Super Retina OLED",ano:"2017"},
{score:41,name:"Google Pixel 2",chip:"Snapdragon 835",ram:"4GB",storage:"128GB",camera:"12.2MP",battery:"2700mAh",tela:"5\" QHD OLED",ano:"2017"},
{score:41,name:"Google Pixel 2 XL",chip:"Snapdragon 835",ram:"4GB",storage:"128GB",camera:"12.2MP",battery:"3520mAh",tela:"5.7\" QHD+ OLED",ano:"2017"},
{score:45,name:"OnePlus 5",chip:"Snapdragon 835",ram:"8GB",storage:"128GB",camera:"16MP + 20MP",battery:"3300mAh",tela:"5.5\" QHD AMOLED",ano:"2017"},
{score:43,name:"Xiaomi Mi 6",chip:"Snapdragon 835",ram:"6GB",storage:"128GB",camera:"12MP + 12MP",battery:"3350mAh",tela:"5.15\" FHD+ AMOLED",ano:"2017"},
{score:47,name:"Huawei Mate 10 Pro",chip:"Kirin 970",ram:"6GB",storage:"128GB",camera:"12MP + 20MP",battery:"4000mAh",tela:"6\" QHD+ OLED",ano:"2017"},
{score:41,name:"LG V30",chip:"Snapdragon 835",ram:"4GB",storage:"128GB",camera:"16MP + 13MP",battery:"3300mAh",tela:"6\" FHD+ OLED",ano:"2017"},{score:95,name:"Samsung Galaxy S27 Ultra",chip:"Snapdragon 8 Elite 3 for Galaxy",ram:"16GB LPDDR6X",storage:"512GB UFS 4.1",camera:"200MP + 50MP + 50MP + 50MP",battery:"5800mAh Si/C",tela:"6.9\" QHD+ LTPO 144Hz",ano:"2027"},{score:92,name:"iPhone 19 Pro Max",chip:"A21 Pro",ram:"16GB",storage:"1TB NVMe",camera:"48MP + 48MP + 48MP periscópio 6X",battery:"5200mAh",tela:"6.9\" Super Retina XDR 120Hz",ano:"2027"},{score:90,name:"Google Pixel 11 Pro",chip:"Tensor G6",ram:"16GB",storage:"512GB",camera:"50MP + 48MP + 48MP",battery:"5000mAh",tela:"6.4\" LTPO OLED 120Hz",ano:"2027"},{score:96,name:"Xiaomi 17 Ultra",chip:"Snapdragon 8 Elite 3",ram:"16GB",storage:"1TB",camera:"200MP Tetracore + 50MP + 50MP + 50MP",battery:"6500mAh Si/C",tela:"6.8\" LTPO AMOLED 144Hz",ano:"2027"},{score:94,name:"OnePlus 14",chip:"Snapdragon 8 Elite 3",ram:"16GB",storage:"512GB",camera:"50MP + 50MP + 50MP",battery:"6500mAh Si/C",tela:"6.82\" QHD+ LTPO 120Hz",ano:"2027"},{score:88,name:"Honor Magic 8 Pro",chip:"Snapdragon 8 Elite 3",ram:"16GB",storage:"512GB",camera:"50MP + 200MP + 50MP",battery:"6000mAh Si/C",tela:"6.8\" LTPO AMOLED 120Hz",ano:"2027"},{score:92,name:"vivo X300 Pro",chip:"Dimensity 9500",ram:"16GB",storage:"512GB",camera:"50MP + 50MP + 50MP",battery:"6000mAh",tela:"6.78\" LTPO AMOLED 120Hz",ano:"2027"},{score:90,name:"ASUS ROG Phone 9",chip:"Snapdragon 8 Elite 3",ram:"16GB",storage:"512GB",camera:"50MP + 50MP",battery:"6000mAh",tela:"6.78\" AMOLED 144Hz",ano:"2027"}
// === Samsung 2016-2020 (complementar) ===
,{score:38,name:"Samsung Galaxy A5 (2017)",chip:"Exynos 7880",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2600mAh",tela:"5\" FHD Super AMOLED",ano:"2017"},{score:36,name:"Samsung Galaxy A7 (2017)",chip:"Exynos 7880",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"2800mAh",tela:"5.7\" FHD Super AMOLED",ano:"2017"},{score:40,name:"Samsung Galaxy J5 Pro",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.5\" HD Super AMOLED",ano:"2017"},{score:38,name:"Samsung Galaxy On7 Pro",chip:"Snapdragon 617",ram:"2GB",storage:"16GB",camera:"13MP + 8MP",battery:"3000mAh",tela:"5.7\" HD IPS",ano:"2017"},{score:46,name:"Samsung Galaxy S8 Active",chip:"Snapdragon 820",ram:"4GB",storage:"128GB",camera:"12MP + 8MP",battery:"4000mAh",tela:"5.8\" QHD Super AMOLED",ano:"2017"},{score:44,name:"Samsung Galaxy C5 Pro",chip:"Snapdragon 650",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"5.7\" FHD Super AMOLED",ano:"2016"},{score:42,name:"Samsung Galaxy A9",chip:"Exynos 7870",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3500mAh",tela:"5.6\" HD Super AMOLED",ano:"2016"},{score:33,name:"Samsung Galaxy J1",chip:"Qualcomm 2050",ram:"768MB",storage:"512MB",camera:"5MP",battery:"2000mAh",tela:"4.3\" HVGA TFT",ano:"2015"},{score:42,name:"Samsung Galaxy A10",chip:"Exynos 9611",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"4000mAh",tela:"6.2\" HD+ PLS LCD",ano:"2019"},{score:40,name:"Samsung Galaxy A20",chip:"Exynos 9611",ram:"2GB",storage:"32GB",camera:"13MP + 5MP",battery:"4000mAh",tela:"5.8\" HD+ PLS LCD",ano:"2019"},{score:42,name:"Samsung Galaxy A30",chip:"Exynos 9611",ram:"3GB",storage:"32GB",camera:"16MP + 5MP + 5MP",battery:"4000mAh",tela:"6.4\" FHD+ PLS LCD",ano:"2019"},{score:44,name:"Samsung Galaxy A50",chip:"Exynos 9611",ram:"3GB",storage:"32GB",camera:"12MP + 5MP + 5MP",battery:"4000mAh",tela:"6.4\" FHD+ PLS LCD",ano:"2019"},{score:45,name:"Samsung Galaxy A50s",chip:"Exynos 9611",ram:"3GB",storage:"32GB",camera:"32MP + 8MP + 5MP + 2MP",battery:"4000mAh",tela:"6.4\" FHD+ PLS LCD",ano:"2019"},{score:44,name:"Samsung Galaxy A70",chip:"Exynos 9611",ram:"4GB",storage:"64GB",camera:"32MP + 8MP + 5MP + 2MP",battery:"4500mAh",tela:"6.7\" FHD+ Super AMOLED",ano:"2019"},{score:36,name:"Samsung Galaxy A30s",chip:"Exynos 9611",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"4000mAh",tela:"6.4\" FHD+ PLS LCD",ano:"2019"},{score:46,name:"Samsung Galaxy M20",chip:"Exynos 9611",ram:"4GB",storage:"64GB",camera:"13MP + 5MP",battery:"5000mAh",tela:"6.3\" FHD+ PLS LCD",ano:"2019"},{score:42,name:"Samsung Galaxy M30s",chip:"Exynos 9611",ram:"4GB",storage:"64GB",camera:"48MP + 5MP + 5MP + 2MP",battery:"6000mAh",tela:"6.4\" FHD+ PLS LCD",ano:"2019"},{score:44,name:"Samsung Galaxy M40",chip:"Snapdragon 665",ram:"4GB",storage:"64GB",camera:"64MP + 5MP",battery:"4000mAh",tela:"6.5\" FHD+ Super AMOLED",ano:"2019"},{score:44,name:"Samsung Galaxy A01 Core",chip:"Unisoc SC9863A",ram:"2GB",storage:"32GB",camera:"5MP + 2MP",battery:"4000mAh",tela:"5.7\" HD+ PLS IPS",ano:"2020"},{score:40,name:"Samsung Galaxy A01s",chip:"MediaTek Helio A22",ram:"2GB",storage:"32GB",camera:"13MP + 2MP",battery:"3700mAh",tela:"5.83\" HD+ PLS IPS",ano:"2020"},{score:42,name:"Samsung Galaxy A11",chip:"Exynos 850",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"4000mAh",tela:"6.2\" HD+ PLS IPS",ano:"2020"},{score:44,name:"Samsung Galaxy A21s",chip:"MediaTek Helio P35",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"4500mAh",tela:"6.5\" HD+ PLS IPS",ano:"2020"},{score:45,name:"Samsung Galaxy A31",chip:"Exynos 9611",ram:"4GB",storage:"64GB",camera:"48MP + 8MP + 5MP + 2MP",battery:"5000mAh",tela:"6.5\" FHD+ Super AMOLED",ano:"2020"},{score:47,name:"Samsung Galaxy A51",chip:"Exynos 9611",ram:"4GB",storage:"64GB",camera:"48MP + 12MP + 5MP + 2MP",battery:"4000mAh",tela:"6.5\" FHD+ Super AMOLED",ano:"2020"},{score:43,name:"Samsung Galaxy A71",chip:"Exynos 9611",ram:"4GB",storage:"64GB",camera:"32MP + 8MP + 5MP + 2MP",battery:"4500mAh",tela:"6.7\" FHD+ Super AMOLED",ano:"2020"},{score:40,name:"Samsung Galaxy M11",chip:"Exynos 850",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"5000mAh",tela:"6.4\" HD+ PLS IPS",ano:"2020"},{score:42,name:"Samsung Galaxy M21",chip:"Exynos 9611",ram:"4GB",storage:"64GB",camera:"48MP + 5MP + 5MP + 2MP",battery:"6000mAh",tela:"6.4\" FHD+ PLS LCD",ano:"2020"},{score:44,name:"Samsung Galaxy M31",chip:"Exynos 9611",ram:"6GB",storage:"128GB",camera:"48MP + 8MP + 5MP + 2MP",battery:"6000mAh",tela:"6.5\" FHD+ Super AMOLED",ano:"2020"},{score:46,name:"Samsung Galaxy M31s",chip:"Exynos 9611",ram:"6GB",storage:"128GB",camera:"48MP + 8MP + 5MP + 2MP",battery:"6000mAh",tela:"6.5\" FHD+ Super AMOLED",ano:"2020"},{score:44,name:"Samsung Galaxy M51",chip:"Snapdragon 720G",ram:"6GB",storage:"128GB",camera:"64MP + 8MP + 5MP + 2MP",battery:"7000mAh",tela:"6.7\" FHD+ Super AMOLED",ano:"2020"},{score:46,name:"Samsung Galaxy A42 5G",chip:"Snapdragon 750G",ram:"4GB",storage:"64GB",camera:"48MP + 8MP + 5MP + 2MP",battery:"5000mAh",tela:"6.6\" FHD+ Super AMOLED",ano:"2021"},{score:47,name:"Samsung Galaxy A52",chip:"Snapdragon 720G",ram:"6GB",storage:"128GB",camera:"64MP + 12MP + 5MP + 2MP",battery:"4500mAh",tela:"6.5\" FHD+ Super AMOLED",ano:"2021"},{score:50,name:"Samsung Galaxy A52 5G",chip:"Snapdragon 750G",ram:"6GB",storage:"128GB",camera:"64MP + 12MP + 5MP + 2MP",battery:"4500mAh",tela:"6.5\" FHD+ Super AMOLED",ano:"2021"},{score:48,name:"Samsung Galaxy A72",chip:"Snapdragon 720G",ram:"8GB",storage:"128GB",camera:"64MP + 12MP + 5MP + 2MP",battery:"4500mAh",tela:"6.7\" FHD+ Super AMOLED",ano:"2021"},{score:46,name:"Samsung Galaxy M52",chip:"Snapdragon 750G",ram:"6GB",storage:"128GB",camera:"64MP + 8MP + 5MP + 2MP",battery:"5000mAh",tela:"6.5\" FHD+ Super AMOLED",ano:"2021"},{score:48,name:"Samsung Galaxy F62",chip:"Snapdragon 720G",ram:"6GB",storage:"128GB",camera:"8MP + 5MP + 5MP + 2MP",battery:"6000mAh",tela:"7\" FHD+ Super AMOLED",ano:"2021"},{score:34,name:"Redmi 5A",chip:"MediaTek Helio P23",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"4000mAh",tela:"5.7\" HD+ IPS",ano:"2017"},{score:36,name:"Redmi 5 Plus",chip:"MediaTek Helio P25",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"4100mAh",tela:"6\" HD+ IPS",ano:"2017"},{score:36,name:"Mi 6X",chip:"Snapdragon 660",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"3350mAh",tela:"5.99\" FHD+ AMOLED",ano:"2017"},{score:38,name:"Redmi Note 5",chip:"Snapdragon 636",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"4000mAh",tela:"5.9\" HD+ IPS",ano:"2017"},{score:40,name:"Redmi 6",chip:"Snapdragon 625",ram:"3GB",storage:"32GB",camera:"12MP + 2MP",battery:"4000mAh",tela:"5.9\" HD+ IPS",ano:"2018"},{score:42,name:"Redmi 6A",chip:"Qualcomm Snapdragon 425",ram:"2GB",storage:"32GB",camera:"12MP + 2MP",battery:"3000mAh",tela:"5.7\" HD+ IPS",ano:"2018"},{score:44,name:"Mi A2",chip:"Snapdragon 660",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"3010mAh",tela:"5.99\" FHD+ IPS LCD",ano:"2018"},{score:46,name:"Mi 8 SE",chip:"Snapdragon 660",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"2760mAh",tela:"5.89\" FHD+ AMOLED",ano:"2018"},{score:38,name:"Mi A1",chip:"Snapdragon 616",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"5.15\" FHD+ IPS LCD",ano:"2016"},{score:40,name:"Redmi 5",chip:"Snapdragon 430",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"4000mAh",tela:"5.7\" HD+ IPS",ano:"2017"},{score:55,name:"Sony Xperia XZ1",chip:"Snapdragon 820",ram:"3GB",storage:"32GB",camera:"19MP + 10MP",battery:"2700mAh",tela:"5.5\" FHD HDR IPS",ano:"2016"},{score:58,name:"Sony Xperia XZ2",chip:"Snapdragon 835",ram:"4GB",storage:"32GB",camera:"12MP + 12MP",battery:"2900mAh",tela:"5.7\" FHD HDR OLED",ano:"2017"},{score:60,name:"Sony Xperia XZ3",chip:"Snapdragon 845",ram:"4GB",storage:"64GB",camera:"12MP + 12MP",battery:"3330mAh",tela:"6\" FHD HDR OLED 120Hz",ano:"2018"},{score:55,name:"Sony Xperia XZ2 Compact",chip:"Snapdragon 835",ram:"3GB",storage:"32GB",camera:"12MP + 12MP",battery:"2870mAh",tela:"5\" FHD HDR OLED",ano:"2017"},{score:52,name:"Sony Xperia XA1",chip:"Snapdragon 650",ram:"2GB",storage:"32GB",camera:"13MP + 5MP",battery:"2900mAh",tela:"5.5\" FHD IPS",ano:"2017"},{score:48,name:"Sony Xperia XA1 Ultra",chip:"Snapdragon 650",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3250mAh",tela:"6\" FHD IPS",ano:"2017"},{score:25,name:"Nokia 3",chip:"Snapdragon 215",ram:"2GB",storage:"16GB",camera:"5MP + 2MP",battery:"4000mAh",tela:"5.2\" HD IPS",ano:"2017"},{score:28,name:"Nokia 5",chip:"Snapdragon 430",ram:"2GB",storage:"16GB",camera:"12MP + 5MP",battery:"2750mAh",tela:"5.2\" FHD IPS",ano:"2017"},{score:32,name:"Nokia 6",chip:"Snapdragon 430",ram:"3GB",storage:"32GB",camera:"16MP + 5MP",battery:"3000mAh",tela:"5.5\" FHD IPS",ano:"2017"},{score:35,name:"Nokia 6.1",chip:"Snapdragon 630",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"5.7\" FHD IPS",ano:"2018"},{score:40,name:"Nokia 7 Plus",chip:"Snapdragon 650",ram:"4GB",storage:"64GB",camera:"12MP + 12MP",battery:"3800mAh",tela:"5.9\" FHD IPS",ano:"2018"},{score:38,name:"Nokia 8",chip:"Snapdragon 636",ram:"4GB",storage:"64GB",camera:"12MP + 12MP",battery:"3500mAh",tela:"5.8\" FHD IPS",ano:"2017"},{score:28,name:"Moto G5",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2800mAh",tela:"5.2\" HD IPS",ano:"2017"},{score:32,name:"Moto G5 Play",chip:"MediaTek Helio P10",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2800mAh",tela:"5\" HD IPS",ano:"2017"},{score:35,name:"Moto G5 Plus",chip:"Snapdragon 617",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"5.2\" FHD IPS",ano:"2017"},{score:36,name:"Moto G5s Plus",chip:"Snapdragon 617",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"5.2\" FHD IPS",ano:"2017"},{score:38,name:"Moto G6",chip:"Snapdragon 450",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"2800mAh",tela:"5.7\" HD+ IPS",ano:"2018"},{score:40,name:"Moto G6 Play",chip:"MediaTek Helio P23",ram:"2GB",storage:"32GB",camera:"12MP + 2MP",battery:"2800mAh",tela:"5.7\" HD+ IPS",ano:"2018"},{score:42,name:"Moto G6 Plus",chip:"Snapdragon 632",ram:"3GB",storage:"32GB",camera:"12MP + 5MP + 2MP",battery:"3000mAh",tela:"5.5\" HD+ IPS",ano:"2018"},{score:35,name:"Moto E5",chip:"MediaTek Helio P23",ram:"2GB",storage:"16GB",camera:"8MP + 2MP",battery:"2800mAh",tela:"5\" HD IPS",ano:"2018"},{score:38,name:"Moto E5 Plus",chip:"MediaTek Helio P23",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"4000mAh",tela:"5.7\" HD IPS",ano:"2018"},{score:44,name:"Moto G7",chip:"Snapdragon 632",ram:"3GB",storage:"32GB",camera:"12MP + 5MP + 2MP",battery:"2400mAh",tela:"5.45\" HD+ IPS",ano:"2019"},{score:44,name:"Moto G7 Power",chip:"Snapdragon 632",ram:"3GB",storage:"32GB",camera:"12MP + 5MP + 2MP",battery:"3000mAh",tela:"5.45\" HD+ IPS",ano:"2019"},{score:48,name:"Moto G7 Play",chip:"Snapdragon 439",ram:"3GB",storage:"32GB",camera:"12MP + 2MP",battery:"3000mAh",tela:"6\" HD+ IPS",ano:"2019"},{score:40,name:"Moto E6",chip:"MediaTek Helio P23",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2800mAh",tela:"5\" HD IPS",ano:"2019"},{score:45,name:"Moto G8",chip:"Snapdragon 480",ram:"3GB",storage:"32GB",camera:"12MP + 8MP + 2MP",battery:"3000mAh",tela:"6.3\" HD+ IPS",ano:"2020"},{score:45,name:"Moto G8 Play",chip:"MediaTek Helio G37",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"3000mAh",tela:"6.5\" HD+ IPS",ano:"2020"},{score:45,name:"Moto G8 Plus",chip:"Snapdragon 665",ram:"4GB",storage:"128GB",camera:"48MP + 5MP + 2MP",battery:"3000mAh",tela:"6.3\" HD+ IPS",ano:"2020"},{score:30,name:"HTC Desire 12",chip:"Qualcomm Snapdragon 415",ram:"2GB",storage:"16GB",camera:"13MP + 8MP",battery:"3000mAh",tela:"5.5\" HD IPS",ano:"2017"},{score:32,name:"HTC U11 Life",chip:"Qualcomm Snapdragon 450",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.8\" FHD IPS",ano:"2017"},{score:34,name:"HTC U12+",chip:"Qualcomm Snapdragon 652",ram:"4GB",storage:"64GB",camera:"16MP + 13MP",battery:"3100mAh",tela:"5.7\" FHD Super LCD 4",ano:"2018"},{score:36,name:"HTC Desire 18X",chip:"Qualcomm Snapdragon 429",ram:"2GB",storage:"32GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5\" HD IPS",ano:"2019"},{score:35,name:"HTC Desire 19+",chip:"Qualcomm Snapdragon 629",ram:"3GB",storage:"32GB",camera:"12MP + 5MP",battery:"3000mAh",tela:"6\" HD+ IPS",ano:"2019"},{score:52,name:"Asus Zenfone 3 Deluxe",chip:"Snapdragon 650",ram:"4GB",storage:"64GB",camera:"13MP + 5MP",battery:"4000mAh",tela:"5.7\" FHD+ Super AMOLED",ano:"2016"},{score:54,name:"Asus Zenfone 3 Deluxe SE",chip:"Snapdragon 650",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"4000mAh",tela:"5.7\" FHD+ Super AMOLED",ano:"2016"},{score:46,name:"Asus Zenfone 3",chip:"Snapdragon 626",ram:"3GB",storage:"64GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.5\" FHD+ Super AMOLED",ano:"2016"},{score:50,name:"Asus Zenfone 3 S",chip:"Snapdragon 650",ram:"4GB",storage:"64GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.7\" FHD+ Super AMOLED",ano:"2016"},


  {score:52,name:"Samsung Galaxy J7 Prime (2018)",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2600mAh",tela:"5.5\" FHD+ Super AMOLED",ano:"2018"},
  {score:55,name:"Samsung Galaxy J7 2018",chip:"Exynos 7870",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.5\" HD+ Super AMOLED",ano:"2018"},
  {score:45,name:"Samsung Galaxy J2 (2018)",chip:"Exynos 7870",ram:"1.5GB",storage:"16GB",camera:"8MP",battery:"2200mAh",tela:"4.7\" HD IPS",ano:"2018"},
  {score:55,name:"Samsung Galaxy J7 Duo",chip:"Exynos 7870",ram:"3GB",storage:"16GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.5\" HD+ Super AMOLED",ano:"2018"},
  {score:50,name:"Samsung Galaxy J5 Duo",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"5.5\" HD+",ano:"2018"},
  {score:48,name:"Samsung Galaxy J2 2018",chip:"Exynos 7870",ram:"1.5GB",storage:"16GB",camera:"8MP",battery:"2200mAh",tela:"4.7\" HD IPS",ano:"2018"},
  {score:45,name:"Samsung Galaxy Core Prime",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2300mAh",tela:"4.7\" HD IPS",ano:"2018"},
  {score:42,name:"Samsung Galaxy Core",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"8MP",battery:"2000mAh",tela:"4.5\" HD IPS",ano:"2018"},
  {score:48,name:"Samsung Galaxy A5s",chip:"Exynos 7885",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3300mAh",tela:"5.7\" FHD+ Super AMOLED",ano:"2018"},
  {score:52,name:"Samsung Galaxy A4s",chip:"Unisoc SC7731C",ram:"2GB",storage:"16GB",camera:"13MP + 5MP",battery:"2400mAh",tela:"5.2\" HD+ IPS",ano:"2018"},
  {score:55,name:"Samsung Galaxy A6s",chip:"Exynos 7885",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"3200mAh",tela:"5.7\" FHD+ Super AMOLED",ano:"2018"},
  {score:58,name:"Samsung Galaxy J4 plus",chip:"Exynos 7870",ram:"2GB",storage:"16GB",camera:"13MP",battery:"2500mAh",tela:"5.3\" HD PS",ano:"2018"},
  {score:58,name:"iPhone SE (2nd generation)",chip:"A13 Bionic",ram:"3GB",storage:"64GB",camera:"12MP",battery:"1821mAh",tela:"4.7\" Retina HD",ano:"2020"},
  {score:62,name:"iPhone XR (64GB)",chip:"A12 Bionic",ram:"4GB",storage:"64GB",camera:"12MP + 12MP",battery:"2942mAh",tela:"6.1\" Liquid Retina",ano:"2018"},
  {score:60,name:"iPhone XR (128GB)",chip:"A12 Bionic",ram:"4GB",storage:"128GB",camera:"12MP + 12MP",battery:"2942mAh",tela:"6.1\" Liquid Retina",ano:"2018"},
  {score:60,name:"Sony Xperia XZ2 Premium Edition",chip:"Snapdragon 845",ram:"6GB",storage:"128GB",camera:"12MP + 12MP + 12MP",battery:"3230mAh",tela:"5.0\" 4K HDR OLED",ano:"2018"},
  {score:55,name:"Sony Xperia L1 (2018)",chip:"Snapdragon 650",ram:"3GB",storage:"32GB",camera:"13MP + 5MP",battery:"2900mAh",tela:"5.5\" HD+ IPS",ano:"2018"},
  {score:48,name:"Sony Xperia XA2 Plus",chip:"Snapdragon 652",ram:"3GB",storage:"32GB",camera:"13MP + 5MP + 2MP",battery:"3250mAh",tela:"6.0\" HD+ IPS",ano:"2018"},
  {score:50,name:"Sony Xperia XA2 Ultra",chip:"Snapdragon 652",ram:"3GB",storage:"32GB",camera:"13MP + 5MP + 2MP",battery:"3830mAh",tela:"6.5\" HD+ IPS",ano:"2018"},
  {score:45,name:"Sony Xperia C4",chip:"Snapdragon 410",ram:"2GB",storage:"16GB",camera:"8MP + 5MP",battery:"2300mAh",tela:"5.7\" HD+ IPS",ano:"2017"},
  {score:62,name:"Xiaomi Mi Mix 2S",chip:"Snapdragon 845",ram:"6GB",storage:"64GB",camera:"12MP + 5MP",battery:"3400mAh",tela:"5.99\" FHD Curved AMOLED",ano:"2018"},
  {score:58,name:"Xiaomi Mi 6X",chip:"Snapdragon 660",ram:"4GB",storage:"64GB",camera:"12MP + 5MP",battery:"3010mAh",tela:"5.99\" FHD+ IPS LCD",ano:"2017"},
  {score:55,name:"Xiaomi Redmi A5T",chip:"Unisoc T310",ram:"3GB",storage:"32GB",camera:"13MP + 2MP",battery:"3000mAh",tela:"5.5\" HD+ IPS",ano:"2018"},
  {score:62,name:"OnePlus 5 (8GB)",chip:"Snapdragon 835",ram:"8GB",storage:"128GB",camera:"16MP + 20MP",battery:"3300mAh",tela:"5.5\" FHD+ AMOLED",ano:"2017"},
  {score:58,name:"OnePlus 6 (8GB)",chip:"Snapdragon 845",ram:"8GB",storage:"128GB",camera:"16MP + 20MP",battery:"3300mAh",tela:"6.2\" Optic AMOLED",ano:"2018"},
  {score:55,name:"OnePlus 5T (6GB)",chip:"Snapdragon 835",ram:"6GB",storage:"64GB",camera:"16MP + 20MP",battery:"3300mAh",tela:"6.0\" FHD+ AMOLED",ano:"2017"},
  {score:44,name:"Nokia 8 Sirocco",chip:"Snapdragon 630",ram:"3GB",storage:"32GB",camera:"13MP + 3MP",battery:"2650mAh",tela:"5.8\" FHD IPS",ano:"2017"},
  {score:48,name:"Nokia 8 Sirocco 2018",chip:"Snapdragon 630",ram:"3GB",storage:"32GB",camera:"12MP + 5MP + 2MP",battery:"2850mAh",tela:"5.2\" FHD IPS",ano:"2018"},
  {score:42,name:"Nokia 3310 4G (2018)",chip:"Qualcomm 205",ram:"0.5GB",storage:"4GB",camera:"2MP",battery:"1200mAh",tela:"2.8\" HVGA IPS",ano:"2017"},
  {score:38,name:"Nokia 8110 4G (2018)",chip:"Qualcomm 215",ram:"1GB",storage:"8GB",camera:"5MP",battery:"1500mAh",tela:"1.43\" QHD IPS",ano:"2017"},
  {score:40,name:"Moto E5 Plus (2018)",chip:"MediaTek Helio P23",ram:"2GB",storage:"16GB",camera:"8MP",battery:"3000mAh",tela:"5.7\" HD IPS",ano:"2018"},
  {score:42,name:"Moto G6 Plus 2018",chip:"Snapdragon 450",ram:"2GB",storage:"32GB",camera:"12MP + 5MP",battery:"2600mAh",tela:"5.7\" HD+ IPS",ano:"2018"},
  {score:45,name:"Moto G6 Play (2018)",chip:"MediaTek Helio P23",ram:"2GB",storage:"32GB",camera:"12MP + 2MP",battery:"2800mAh",tela:"5.7\" HD+ IPS",ano:"2018"},
  {score:52,name:"Oppo A5 (2018)",chip:"Snapdragon 425",ram:"2GB",storage:"32GB",camera:"13MP + 5MP",battery:"2300mAh",tela:"4.9\" FHD IPS",ano:"2018"},
  {score:55,name:"Oppo A7 (2018)",chip:"MediaTek Helio P22",ram:"3GB",storage:"32GB",camera:"16MP + 2MP",battery:"3000mAh",tela:"5.5\" Full HD+ IPS",ano:"2018"},
  {score:58,name:"Oppo Find X (2018)",chip:"Snapdragon 845",ram:"8GB",storage:"128GB",camera:"48MP + 2MP",battery:"3900mAh",tela:"6.4\" FHD+ Optica Yizo",ano:"2018"},
  {score:60,name:"Oppo Reno 10x Zoom",chip:"Snapdragon 636",ram:"4GB",storage:"64GB",camera:"12MP + 5MP + 2MP",battery:"3500mAh",tela:"6.3\" HD+ Optica 3D 2018",ano:"2018"},
  {score:65,name:"Oppo Reno 5G (2018)",chip:"Snapdragon 845",ram:"6GB",storage:"64GB",camera:"12MP + 5MP + 5MP",battery:"3800mAh",tela:"6.4\" FHD+ Optica Camera 2018",ano:"2018"},
  {score:52,name:"Vivo V9 Pro",chip:"Snapdragon 660",ram:"4GB",storage:"64GB",camera:"12MP + 2MP",battery:"3500mAh",tela:"5.7\" FHD IPS",ano:"2017"},
  {score:48,name:"Vivo V21",chip:"Snapdragon 665",ram:"3GB",storage:"64GB",camera:"12MP + 2MP",battery:"3500mAh",tela:"6.4\" FHD+ Slim IPS",ano:"2018"},
  {score:50,name:"Vivo V15 Pro",chip:"Snapdragon 636",ram:"3GB",storage:"128GB",camera:"32MP + 5MP + 2MP",battery:"3300mAh",tela:"6.4\" Full HD+ Slim IPS",ano:"2018"},
  {score:45,name:"Vivo V15",chip:"Snapdragon 636",ram:"3GB",storage:"64GB",camera:"32MP + 2MP + 2MP",battery:"3300mAh",tela:"6.4\" HD+ Slim IPS",ano:"2018"},
  {score:50,name:"Vivo X21",chip:"Snapdragon 665",ram:"4GB",storage:"64GB",camera:"48MP + 5MP + 2MP",battery:"3300mAh",tela:"6.53\" Full HD+ IPS",ano:"2018"},
  {score:40,name:"Lenovo Vibe S1",chip:"Snapdragon 215",ram:"1.5GB",storage:"8GB",camera:"5MP",battery:"2000mAh",tela:"4.5\" HD IPS",ano:"2018"},
  {score:42,name:"Lenovo Vibe K1a Pro",chip:"MediaTek Helio A22",ram:"2GB",storage:"32GB",camera:"13MP + 2MP",battery:"3000mAh",tela:"5.5\" HD+ IPS",ano:"2018"},
  {score:45,name:"Lenovo Vibe K4 Note",chip:"Snapdragon 450",ram:"2GB",storage:"32GB",camera:"13MP + 5MP",battery:"3000mAh",tela:"5.7\" HD+ IPS",ano:"2018"},
  {score:45,name:"Lenovo Vibe K5 Note (2018)",chip:"Snapdragon 450",ram:"2GB",storage:"32GB",camera:"13MP + 5MP",battery:"3200mAh",tela:"5.7\" HD+ IPS",ano:"2018"},
{score:38,name:"Samsung Galaxy S6",chip:"Exynos 7420",ram:"3GB",storage:"32GB",camera:"16MP",battery:"2550mAh",tela:"5.1\" QHD Super AMOLED",ano:"2015"},
{score:39,name:"Samsung Galaxy S6 Edge",chip:"Exynos 7420",ram:"3GB",storage:"64GB",camera:"16MP",battery:"2600mAh",tela:"5.1\" QHD Dual Edge AMOLED",ano:"2015"},
{score:40,name:"iPhone 6s",chip:"A9",ram:"2GB",storage:"64GB",camera:"12MP",battery:"1715mAh",tela:"4.7\" Retina HD",ano:"2015"},
{score:41,name:"iPhone 6s Plus",chip:"A9",ram:"2GB",storage:"64GB",camera:"12MP",battery:"2750mAh",tela:"5.5\" Retina HD",ano:"2015"},
{score:36,name:"LG G4",chip:"Snapdragon 808",ram:"3GB",storage:"32GB",camera:"16MP",battery:"3000mAh",tela:"5.5\" QHD IPS",ano:"2015"},
{score:34,name:"HTC One M9",chip:"Snapdragon 810",ram:"3GB",storage:"32GB",camera:"20MP",battery:"2840mAh",tela:"5\" FHD Super LCD 3",ano:"2015"},
{score:37,name:"Sony Xperia Z5",chip:"Snapdragon 810",ram:"3GB",storage:"32GB",camera:"23MP",battery:"2900mAh",tela:"5.2\" FHD IPS",ano:"2015"},
{score:39,name:"Google Nexus 6P",chip:"Snapdragon 810",ram:"3GB",storage:"64GB",camera:"12.3MP",battery:"3450mAh",tela:"5.7\" QHD AMOLED",ano:"2015"},
{score:35,name:"OnePlus 2",chip:"Snapdragon 810",ram:"4GB",storage:"64GB",camera:"13MP",battery:"3300mAh",tela:"5.5\" FHD IPS",ano:"2015"},
{score:68,name:"Samsung Galaxy S22",chip:"Snapdragon 8 Gen 1",ram:"8GB",storage:"128GB",camera:"50MP + 12MP + 10MP",battery:"3700mAh",tela:"6.1\" FHD+ AMOLED 120Hz",ano:"2022"},
{score:70,name:"Samsung Galaxy Z Flip4",chip:"Snapdragon 8+ Gen 1",ram:"8GB",storage:"256GB",camera:"12MP + 12MP",battery:"3700mAh",tela:"6.7\" Foldable AMOLED 120Hz",ano:"2022"},
{score:74,name:"iPhone 14",chip:"A15 Bionic",ram:"6GB",storage:"128GB",camera:"12MP + 12MP",battery:"3279mAh",tela:"6.1\" Super Retina XDR",ano:"2022"},
{score:72,name:"Google Pixel 7",chip:"Tensor G2",ram:"8GB",storage:"128GB",camera:"50MP + 12MP",battery:"4355mAh",tela:"6.3\" OLED 90Hz",ano:"2022"},
{score:70,name:"OnePlus 10 Pro",chip:"Snapdragon 8 Gen 1",ram:"12GB",storage:"256GB",camera:"48MP + 50MP + 8MP",battery:"5000mAh",tela:"6.7\" QHD+ LTPO 120Hz",ano:"2022"},
{score:64,name:"Nothing Phone (1)",chip:"Snapdragon 778G+",ram:"8GB",storage:"256GB",camera:"50MP + 50MP",battery:"4500mAh",tela:"6.55\" OLED 120Hz",ano:"2022"},
{score:78,name:"iPhone 15",chip:"A16 Bionic",ram:"6GB",storage:"128GB",camera:"48MP + 12MP",battery:"3349mAh",tela:"6.1\" Super Retina XDR",ano:"2023"},
{score:82,name:"Samsung Galaxy S23",chip:"Snapdragon 8 Gen 2 for Galaxy",ram:"8GB",storage:"256GB",camera:"50MP + 12MP + 10MP",battery:"3900mAh",tela:"6.1\" AMOLED 120Hz",ano:"2023"},
{score:76,name:"Samsung Galaxy Z Flip5",chip:"Snapdragon 8 Gen 2 for Galaxy",ram:"8GB",storage:"256GB",camera:"12MP + 12MP",battery:"3700mAh",tela:"6.7\" Foldable AMOLED 120Hz",ano:"2023"},
{score:76,name:"Google Pixel 8",chip:"Tensor G3",ram:"8GB",storage:"128GB",camera:"50MP + 12MP",battery:"4575mAh",tela:"6.2\" OLED 120Hz",ano:"2023"},
{score:86,name:"Xiaomi 13 Ultra",chip:"Snapdragon 8 Gen 2",ram:"12GB",storage:"512GB",camera:"50MP + 50MP + 50MP + 50MP",battery:"5000mAh",tela:"6.73\" QHD+ LTPO 120Hz",ano:"2023"},
{score:97,name:"Samsung Galaxy S25+",chip:"Snapdragon 8 Elite for Galaxy",ram:"12GB LPDDR5X",storage:"512GB UFS 4.0",camera:"50MP + 12MP + 10MP",battery:"4900mAh",tela:"6.7\" QHD+ LTPO 120Hz",ano:"2025"},
{score:93,name:"Samsung Galaxy Z Fold7",chip:"Snapdragon 8 Elite for Galaxy",ram:"12GB",storage:"512GB",camera:"200MP + 12MP + 10MP",battery:"4400mAh",tela:"8\" Foldable AMOLED 120Hz",ano:"2025"},
{score:88,name:"Samsung Galaxy Z Flip7",chip:"Exynos 2500",ram:"12GB",storage:"256GB",camera:"50MP + 12MP",battery:"4300mAh",tela:"6.9\" Foldable AMOLED 120Hz",ano:"2025"},
{score:90,name:"iPhone 17",chip:"A19",ram:"8GB",storage:"256GB NVMe",camera:"48MP + 48MP",battery:"3692mAh",tela:"6.3\" Super Retina XDR 120Hz",ano:"2025"},
{score:94,name:"iPhone 17 Pro",chip:"A19 Pro",ram:"12GB",storage:"256GB NVMe",camera:"48MP + 48MP + 48MP",battery:"3988mAh",tela:"6.3\" Super Retina XDR 120Hz",ano:"2025"},
{score:85,name:"iPhone Air",chip:"A19 Pro",ram:"12GB",storage:"256GB NVMe",camera:"48MP",battery:"3149mAh",tela:"6.5\" Super Retina XDR 120Hz",ano:"2025"},
{score:84,name:"Google Pixel 10",chip:"Tensor G5",ram:"12GB",storage:"128GB",camera:"48MP + 13MP + 10.8MP",battery:"4970mAh",tela:"6.3\" LTPO OLED 120Hz",ano:"2025"},
{score:90,name:"Google Pixel 10 Pro XL",chip:"Tensor G5",ram:"16GB",storage:"256GB",camera:"50MP + 48MP + 48MP",battery:"5200mAh",tela:"6.8\" LTPO OLED 120Hz",ano:"2025"},
{score:99,name:"Xiaomi 15 Ultra",chip:"Snapdragon 8 Elite",ram:"16GB",storage:"512GB",camera:"50MP + 50MP + 50MP + 200MP",battery:"5410mAh Si/C",tela:"6.73\" QHD+ LTPO 120Hz",ano:"2025"},
{score:86,name:"OnePlus 13R",chip:"Snapdragon 8 Gen 3",ram:"12GB",storage:"256GB",camera:"50MP + 50MP + 8MP",battery:"6000mAh Si/C",tela:"6.78\" AMOLED 120Hz",ano:"2025"},
{score:84,name:"Nothing Phone (3)",chip:"Snapdragon 8s Gen 4",ram:"12GB",storage:"256GB",camera:"50MP + 50MP + 50MP",battery:"5150mAh",tela:"6.67\" AMOLED 120Hz",ano:"2025"},
{score:66,name:"Samsung Galaxy Note 20 Ultra",chip:"Snapdragon 865+",ram:"12GB",storage:"256GB",camera:"108MP + 12MP + 12MP",battery:"4500mAh",tela:"6.9\" QHD+ AMOLED 120Hz",ano:"2020"},
{score:58,name:"Google Pixel 5",chip:"Snapdragon 765G",ram:"8GB",storage:"128GB",camera:"12.2MP + 16MP",battery:"4080mAh",tela:"6\" OLED 90Hz",ano:"2020"},
{score:60,name:"Samsung Galaxy S20 FE",chip:"Snapdragon 865",ram:"8GB",storage:"128GB",camera:"12MP + 12MP + 8MP",battery:"4500mAh",tela:"6.5\" Super AMOLED 120Hz",ano:"2020"},
{score:62,name:"OnePlus 8 Pro",chip:"Snapdragon 865",ram:"12GB",storage:"256GB",camera:"48MP + 48MP + 8MP + 5MP",battery:"4510mAh",tela:"6.78\" QHD+ Fluid AMOLED 120Hz",ano:"2020"},
{score:72,name:"Samsung Galaxy Z Fold3",chip:"Snapdragon 888",ram:"12GB",storage:"256GB",camera:"12MP + 12MP + 12MP",battery:"4400mAh",tela:"7.6\" Foldable AMOLED 120Hz",ano:"2021"},
{score:68,name:"Samsung Galaxy Z Flip3",chip:"Snapdragon 888",ram:"8GB",storage:"128GB",camera:"12MP + 12MP",battery:"3300mAh",tela:"6.7\" Foldable AMOLED 120Hz",ano:"2021"},
{score:88,name:"OPPO Find X8",chip:"Dimensity 9400",ram:"16GB",storage:"512GB",camera:"50MP + 50MP + 50MP",battery:"5630mAh Si/C",tela:"6.59\" AMOLED 120Hz",ano:"2024"},
{score:76,name:"iPhone 16e",chip:"A18",ram:"8GB",storage:"128GB NVMe",camera:"48MP",battery:"4005mAh",tela:"6.1\" Super Retina XDR",ano:"2025"},
{score:77,name:"Google Pixel 9a",chip:"Tensor G4",ram:"8GB",storage:"128GB",camera:"48MP + 13MP",battery:"5100mAh",tela:"6.3\" OLED 120Hz",ano:"2025"},
{score:86,name:"Samsung Galaxy S25 FE",chip:"Exynos 2400",ram:"8GB",storage:"128GB",camera:"50MP + 12MP + 8MP",battery:"4900mAh",tela:"6.7\" AMOLED 120Hz",ano:"2025"},
{score:72,name:"Samsung Galaxy A56",chip:"Exynos 1580",ram:"12GB",storage:"128GB",camera:"50MP + 12MP + 5MP",battery:"5000mAh",tela:"6.7\" Super AMOLED 120Hz",ano:"2025"},
{score:68,name:"Samsung Galaxy A36",chip:"Snapdragon 6 Gen 3",ram:"8GB",storage:"128GB",camera:"50MP + 8MP + 5MP",battery:"5000mAh",tela:"6.7\" Super AMOLED 120Hz",ano:"2025"},
{score:74,name:"Motorola Edge 60 Pro",chip:"Dimensity 8350 Extreme",ram:"12GB",storage:"256GB",camera:"50MP + 50MP + 10MP",battery:"6000mAh Si/C",tela:"6.7\" pOLED 120Hz",ano:"2025"},
{score:87,name:"OnePlus 13s",chip:"Snapdragon 8 Elite",ram:"12GB",storage:"256GB",camera:"50MP + 50MP",battery:"6260mAh Si/C",tela:"6.32\" AMOLED 120Hz",ano:"2025"},
{score:84,name:"Xiaomi 15T",chip:"Dimensity 8400 Ultra",ram:"12GB",storage:"256GB",camera:"50MP + 50MP + 12MP",battery:"5000mAh",tela:"6.83\" AMOLED 144Hz",ano:"2025"},],
cpus:[
{score:55,id:"i7-6950X",nome:"Intel Core i7-6950X",nucleos:"10",threads:"20",base:"3.0GHz",boost:"3.5GHz",tdp:"140W",socket:"LGA2011-v3",ano:"2016"},
{score:52,id:"i7-6900K",nome:"Intel Core i7-6900K",nucleos:"8",threads:"16",base:"3.2GHz",boost:"3.9GHz",tdp:"120W",socket:"LGA2011-v3",ano:"2016"},
{score:48,id:"i7-6850K",nome:"Intel Core i7-6850K",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.0GHz",tdp:"140W",socket:"LGA2011-v3",ano:"2016"},
{score:46,id:"i7-6800K",nome:"Intel Core i7-6800K",nucleos:"6",threads:"12",base:"3.4GHz",boost:"3.8GHz",tdp:"140W",socket:"LGA2011-v3",ano:"2016"},
{score:44,id:"i7-6785R",nome:"Intel Core i7-6785R",nucleos:"4",threads:"8",base:"3.1GHz",boost:"3.9GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:40,id:"i5-6685R",nome:"Intel Core i5-6685R",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.0GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:39,id:"i5-6585R",nome:"Intel Core i5-6585R",nucleos:"4",threads:"4",base:"3.4GHz",boost:"3.9GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:30,id:"i3-6006U",nome:"Intel Core i3-6006U",nucleos:"2",threads:"4",base:"2.0GHz",boost:"2.0GHz",tdp:"15W",socket:"Mobile",ano:"2016"},
{score:31,id:"i3-6157U",nome:"Intel Core i3-6157U",nucleos:"2",threads:"4",base:"2.3GHz",boost:"2.3GHz",tdp:"15W",socket:"Mobile",ano:"2016"},
{score:32,id:"i3-7100U",nome:"Intel Core i3-7100U",nucleos:"2",threads:"4",base:"2.4GHz",boost:"2.4GHz",tdp:"15W",socket:"Mobile",ano:"2016"},
{score:38,id:"i5-6350HQ",nome:"Intel Core i5-6350HQ",nucleos:"4",threads:"4",base:"2.3GHz",boost:"3.2GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:33,id:"i5-7200U",nome:"Intel Core i5-7200U",nucleos:"2",threads:"4",base:"2.5GHz",boost:"3.1GHz",tdp:"15W",socket:"Mobile",ano:"2016"},
{score:30,id:"i5-7Y54",nome:"Intel Core i5-7Y54",nucleos:"2",threads:"4",base:"1.4GHz",boost:"3.2GHz",tdp:"4.5W",socket:"Mobile",ano:"2016"},
{score:35,id:"i7-6660U",nome:"Intel Core i7-6660U",nucleos:"2",threads:"4",base:"2.4GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2016"},
{score:42,id:"i7-6770HQ",nome:"Intel Core i7-6770HQ",nucleos:"4",threads:"8",base:"2.8GHz",boost:"3.5GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:41,id:"i7-6870HQ",nome:"Intel Core i7-6870HQ",nucleos:"4",threads:"8",base:"2.7GHz",boost:"3.3GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:43,id:"i7-6970HQ",nome:"Intel Core i7-6970HQ",nucleos:"4",threads:"8",base:"2.8GHz",boost:"3.5GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:36,id:"i7-7500U",nome:"Intel Core i7-7500U",nucleos:"2",threads:"4",base:"2.8GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2016"},
{score:37,id:"i7-7600U",nome:"Intel Core i7-7600U",nucleos:"2",threads:"4",base:"2.8GHz",boost:"3.9GHz",tdp:"15W",socket:"Mobile",ano:"2016"},
{score:31,id:"i7-7Y75",nome:"Intel Core i7-7Y75",nucleos:"2",threads:"4",base:"1.3GHz",boost:"3.5GHz",tdp:"4.5W",socket:"Mobile",ano:"2016"},
{score:28,id:"M3-7Y30",nome:"Intel Core M3-7Y30",nucleos:"2",threads:"4",base:"1.05GHz",boost:"2.2GHz",tdp:"4.5W",socket:"Mobile",ano:"2016"},
{score:42,id:"XeonE3-1515MV5",nome:"Intel Xeon E3-1515MV5",nucleos:"4",threads:"8",base:"2.8GHz",boost:"3.8GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:44,id:"XeonE3-1545MV5",nome:"Intel Xeon E3-1545MV5",nucleos:"4",threads:"8",base:"3.1GHz",boost:"3.9GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:45,id:"XeonE3-1575MV5",nome:"Intel Xeon E3-1575MV5",nucleos:"4",threads:"8",base:"3.2GHz",boost:"4.0GHz",tdp:"45W",socket:"Mobile",ano:"2016"},
{score:35,id:"Ryzen3-1200",nome:"AMD Ryzen 3 1200",nucleos:"4",threads:"4",base:"3.0GHz",boost:"3.5GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:37,id:"Ryzen3-1300X",nome:"AMD Ryzen 3 1300X",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.7GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:35,id:"Ryzen3PRO-1200",nome:"AMD Ryzen 3 PRO 1200",nucleos:"4",threads:"4",base:"3.0GHz",boost:"3.5GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:36,id:"Ryzen3PRO-1300",nome:"AMD Ryzen 3 PRO 1300",nucleos:"4",threads:"4",base:"3.2GHz",boost:"3.5GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:38,id:"Ryzen5-1400",nome:"AMD Ryzen 5 1400",nucleos:"4",threads:"8",base:"3.2GHz",boost:"3.4GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:40,id:"Ryzen5-1500X",nome:"AMD Ryzen 5 1500X",nucleos:"4",threads:"8",base:"3.5GHz",boost:"3.8GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:42,id:"Ryzen5-1600",nome:"AMD Ryzen 5 1600",nucleos:"6",threads:"12",base:"3.2GHz",boost:"3.6GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:44,id:"Ryzen5-1600X",nome:"AMD Ryzen 5 1600X",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.0GHz",tdp:"95W",socket:"AM4",ano:"2017"},
{score:39,id:"Ryzen5PRO-1500",nome:"AMD Ryzen 5 PRO 1500",nucleos:"4",threads:"8",base:"3.4GHz",boost:"3.8GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:42,id:"Ryzen5PRO-1600",nome:"AMD Ryzen 5 PRO 1600",nucleos:"6",threads:"12",base:"3.2GHz",boost:"3.6GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:48,id:"Ryzen7-1700",nome:"AMD Ryzen 7 1700",nucleos:"8",threads:"16",base:"3.0GHz",boost:"3.7GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:50,id:"Ryzen7-1700X",nome:"AMD Ryzen 7 1700X",nucleos:"8",threads:"16",base:"3.4GHz",boost:"3.8GHz",tdp:"95W",socket:"AM4",ano:"2017"},
{score:52,id:"Ryzen7-1800X",nome:"AMD Ryzen 7 1800X",nucleos:"8",threads:"16",base:"3.6GHz",boost:"4.0GHz",tdp:"95W",socket:"AM4",ano:"2017"},
{score:48,id:"Ryzen7PRO-1700",nome:"AMD Ryzen 7 PRO 1700",nucleos:"8",threads:"16",base:"3.0GHz",boost:"3.7GHz",tdp:"65W",socket:"AM4",ano:"2017"},
{score:50,id:"Ryzen7PRO-1700X",nome:"AMD Ryzen 7 PRO 1700X",nucleos:"8",threads:"16",base:"3.4GHz",boost:"3.8GHz",tdp:"95W",socket:"AM4",ano:"2017"},
{score:22,id:"CeleronG3930",nome:"Intel Celeron G3930",nucleos:"2",threads:"2",base:"2.5GHz",boost:"2.5GHz",tdp:"51W",socket:"LGA1151",ano:"2017"},
{score:22,id:"CeleronG3930E",nome:"Intel Celeron G3930E",nucleos:"2",threads:"2",base:"2.5GHz",boost:"2.5GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:21,id:"CeleronG3930T",nome:"Intel Celeron G3930T",nucleos:"2",threads:"2",base:"2.5GHz",boost:"2.5GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:21,id:"CeleronG3930TE",nome:"Intel Celeron G3930TE",nucleos:"2",threads:"2",base:"2.5GHz",boost:"2.5GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:22,id:"CeleronG3950",nome:"Intel Celeron G3950",nucleos:"2",threads:"2",base:"2.5GHz",boost:"2.5GHz",tdp:"51W",socket:"LGA1151",ano:"2017"},
{score:28,id:"i3-7100",nome:"Intel Core i3-7100",nucleos:"2",threads:"4",base:"3.9GHz",boost:"3.9GHz",tdp:"51W",socket:"LGA1151",ano:"2017"},
{score:27,id:"i3-7100T",nome:"Intel Core i3-7100T",nucleos:"2",threads:"4",base:"3.4GHz",boost:"3.4GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:28,id:"i3-7101E",nome:"Intel Core i3-7101E",nucleos:"2",threads:"4",base:"3.9GHz",boost:"3.9GHz",tdp:"51W",socket:"LGA1151",ano:"2017"},
{score:27,id:"i3-7101TE",nome:"Intel Core i3-7101TE",nucleos:"2",threads:"4",base:"3.4GHz",boost:"3.4GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:29,id:"i3-7300",nome:"Intel Core i3-7300",nucleos:"2",threads:"4",base:"4.0GHz",boost:"4.0GHz",tdp:"51W",socket:"LGA1151",ano:"2017"},
{score:28,id:"i3-7300T",nome:"Intel Core i3-7300T",nucleos:"2",threads:"4",base:"3.5GHz",boost:"3.5GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:29,id:"i3-7320",nome:"Intel Core i3-7320",nucleos:"2",threads:"4",base:"4.1GHz",boost:"4.1GHz",tdp:"51W",socket:"LGA1151",ano:"2017"},
{score:30,id:"i3-7350K",nome:"Intel Core i3-7350K",nucleos:"2",threads:"4",base:"4.2GHz",boost:"4.2GHz",tdp:"60W",socket:"LGA1151",ano:"2017"},
{score:32,id:"i3-8100",nome:"Intel Core i3-8100",nucleos:"4",threads:"4",base:"3.6GHz",boost:"3.6GHz",tdp:"65W",socket:"LGA1151",ano:"2017"},
{score:34,id:"i3-8350K",nome:"Intel Core i3-8350K",nucleos:"4",threads:"4",base:"4.0GHz",boost:"4.0GHz",tdp:"91W",socket:"LGA1151",ano:"2017"},
{score:34,id:"i5-7400",nome:"Intel Core i5-7400",nucleos:"4",threads:"4",base:"3.0GHz",boost:"3.5GHz",tdp:"65W",socket:"LGA1151",ano:"2017"},
{score:33,id:"i5-7400T",nome:"Intel Core i5-7400T",nucleos:"4",threads:"4",base:"2.8GHz",boost:"3.3GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:36,id:"i5-7500",nome:"Intel Core i5-7500",nucleos:"4",threads:"4",base:"3.4GHz",boost:"3.8GHz",tdp:"65W",socket:"LGA1151",ano:"2017"},
{score:35,id:"i5-7500T",nome:"Intel Core i5-7500T",nucleos:"4",threads:"4",base:"3.1GHz",boost:"3.8GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:37,id:"i5-7600",nome:"Intel Core i5-7600",nucleos:"4",threads:"4",base:"3.5GHz",boost:"4.1GHz",tdp:"65W",socket:"LGA1151",ano:"2017"},
{score:39,id:"i5-7600K",nome:"Intel Core i5-7600K",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.2GHz",tdp:"91W",socket:"LGA1151",ano:"2017"},
{score:36,id:"i5-7600T",nome:"Intel Core i5-7600T",nucleos:"4",threads:"4",base:"3.5GHz",boost:"4.1GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:40,id:"i5-7640X",nome:"Intel Core i5-7640X",nucleos:"4",threads:"4",base:"4.0GHz",boost:"4.2GHz",tdp:"140W",socket:"LGA2066",ano:"2017"},
{score:40,id:"i5-8400",nome:"Intel Core i5-8400",nucleos:"6",threads:"6",base:"2.8GHz",boost:"4.0GHz",tdp:"95W",socket:"LGA1151",ano:"2017"},
{score:43,id:"i5-8600K",nome:"Intel Core i5-8600K",nucleos:"6",threads:"6",base:"3.6GHz",boost:"4.3GHz",tdp:"95W",socket:"LGA1151",ano:"2017"},
{score:40,id:"i7-7700",nome:"Intel Core i7-7700",nucleos:"4",threads:"8",base:"3.6GHz",boost:"4.2GHz",tdp:"65W",socket:"LGA1151",ano:"2017"},
{score:43,id:"i7-7700K",nome:"Intel Core i7-7700K",nucleos:"4",threads:"8",base:"4.2GHz",boost:"4.5GHz",tdp:"91W",socket:"LGA1151",ano:"2017"},
{score:38,id:"i7-7700T",nome:"Intel Core i7-7700T",nucleos:"4",threads:"8",base:"2.9GHz",boost:"3.8GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:44,id:"i7-7740X",nome:"Intel Core i7-7740X",nucleos:"4",threads:"8",base:"4.3GHz",boost:"4.5GHz",tdp:"140W",socket:"LGA2066",ano:"2017"},
{score:48,id:"i7-7800X",nome:"Intel Core i7-7800X",nucleos:"6",threads:"12",base:"4.0GHz",boost:"4.4GHz",tdp:"140W",socket:"LGA2066",ano:"2017"},
{score:52,id:"i7-7820X",nome:"Intel Core i7-7820X",nucleos:"8",threads:"16",base:"3.5GHz",boost:"4.0GHz",tdp:"140W",socket:"LGA2066",ano:"2017"},
{score:46,id:"i7-8700",nome:"Intel Core i7-8700",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1151",ano:"2017"},
{score:50,id:"i7-8700K",nome:"Intel Core i7-8700K",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.7GHz",tdp:"95W",socket:"LGA1151",ano:"2017"},
{score:55,id:"i9-7900X",nome:"Intel Core i9-7900X",nucleos:"10",threads:"20",base:"3.3GHz",boost:"4.3GHz",tdp:"140W",socket:"LGA2066",ano:"2017"},
{score:58,id:"i9-7920X",nome:"Intel Core i9-7920X",nucleos:"12",threads:"24",base:"3.1GHz",boost:"4.5GHz",tdp:"140W",socket:"LGA2066",ano:"2017"},
{score:60,id:"i9-7940X",nome:"Intel Core i9-7940X",nucleos:"14",threads:"28",base:"3.1GHz",boost:"4.3GHz",tdp:"165W",socket:"LGA2066",ano:"2017"},
{score:62,id:"i9-7960X",nome:"Intel Core i9-7960X",nucleos:"16",threads:"32",base:"2.8GHz",boost:"4.8GHz",tdp:"165W",socket:"LGA2066",ano:"2017"},
{score:64,id:"i9-7980XE",nome:"Intel Core i9-7980XE",nucleos:"18",threads:"36",base:"2.6GHz",boost:"4.4GHz",tdp:"205W",socket:"LGA2066",ano:"2017"},
{score:28,id:"PentiumG4560",nome:"Intel Pentium G4560",nucleos:"2",threads:"4",base:"3.5GHz",boost:"3.5GHz",tdp:"54W",socket:"LGA1151",ano:"2017"},
{score:27,id:"PentiumG4560T",nome:"Intel Pentium G4560T",nucleos:"2",threads:"4",base:"3.5GHz",boost:"3.5GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:30,id:"PentiumG4600",nome:"Intel Pentium G4600",nucleos:"2",threads:"4",base:"3.8GHz",boost:"3.8GHz",tdp:"54W",socket:"LGA1151",ano:"2017"},
{score:28,id:"PentiumG4600T",nome:"Intel Pentium G4600T",nucleos:"2",threads:"4",base:"3.2GHz",boost:"3.2GHz",tdp:"35W",socket:"LGA1151",ano:"2017"},
{score:29,id:"PentiumG4620",nome:"Intel Pentium G4620",nucleos:"2",threads:"4",base:"3.7GHz",boost:"3.7GHz",tdp:"54W",socket:"LGA1151",ano:"2017"},
{score:32,id:"Ryzen5-2500U",nome:"AMD Ryzen 5 2500U",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.6GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:36,id:"Ryzen7-2700U",nome:"AMD Ryzen 7 2700U",nucleos:"4",threads:"8",base:"2.2GHz",boost:"3.8GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:20,id:"Celeron3865U",nome:"Intel Celeron 3865U",nucleos:"2",threads:"2",base:"1.8GHz",boost:"1.8GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:22,id:"Celeron3965U",nome:"Intel Celeron 3965U",nucleos:"2",threads:"2",base:"2.2GHz",boost:"2.2GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:19,id:"Celeron3965Y",nome:"Intel Celeron 3965Y",nucleos:"2",threads:"2",base:"1.5GHz",boost:"1.5GHz",tdp:"10W",socket:"Mobile",ano:"2017"},
{score:30,id:"i3-7100H",nome:"Intel Core i3-7100H",nucleos:"2",threads:"4",base:"3.4GHz",boost:"3.4GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:28,id:"i3-7130U",nome:"Intel Core i3-7130U",nucleos:"2",threads:"4",base:"3.7GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:27,id:"i3-7167U",nome:"Intel Core i3-7167U",nucleos:"2",threads:"4",base:"3.1GHz",boost:"3.1GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:30,id:"i5-7260U",nome:"Intel Core i5-7260U",nucleos:"2",threads:"4",base:"2.2GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:31,id:"i5-7267U",nome:"Intel Core i5-7267U",nucleos:"2",threads:"4",base:"3.1GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:32,id:"i5-7287U",nome:"Intel Core i5-7287U",nucleos:"2",threads:"4",base:"3.3GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:34,id:"i5-7300HQ",nome:"Intel Core i5-7300HQ",nucleos:"4",threads:"4",base:"2.5GHz",boost:"3.5GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:30,id:"i5-7300U",nome:"Intel Core i5-7300U",nucleos:"2",threads:"4",base:"2.6GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:31,id:"i5-7360U",nome:"Intel Core i5-7360U",nucleos:"2",threads:"4",base:"2.3GHz",boost:"3.6GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:34,id:"i5-7440HQ",nome:"Intel Core i5-7440HQ",nucleos:"4",threads:"4",base:"2.5GHz",boost:"3.5GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:28,id:"i5-7Y57",nome:"Intel Core i5-7Y57",nucleos:"2",threads:"4",base:"1.2GHz",boost:"3.2GHz",tdp:"4.5W",socket:"Mobile",ano:"2017"},
{score:34,id:"i5-8250U",nome:"Intel Core i5-8250U",nucleos:"4",threads:"4",base:"1.6GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:35,id:"i5-8350U",nome:"Intel Core i5-8350U",nucleos:"4",threads:"4",base:"1.7GHz",boost:"3.6GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:32,id:"i7-7560U",nome:"Intel Core i7-7560U",nucleos:"2",threads:"4",base:"2.0GHz",boost:"3.2GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:34,id:"i7-7567U",nome:"Intel Core i7-7567U",nucleos:"2",threads:"4",base:"3.5GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:34,id:"i7-7660U",nome:"Intel Core i7-7660U",nucleos:"2",threads:"4",base:"2.8GHz",boost:"3.9GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:38,id:"i7-7700HQ",nome:"Intel Core i7-7700HQ",nucleos:"4",threads:"8",base:"2.8GHz",boost:"3.8GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:40,id:"i7-7820HK",nome:"Intel Core i7-7820HK",nucleos:"4",threads:"8",base:"2.9GHz",boost:"3.9GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:40,id:"i7-7820HQ",nome:"Intel Core i7-7820HQ",nucleos:"4",threads:"8",base:"2.9GHz",boost:"3.9GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:42,id:"i7-7920HQ",nome:"Intel Core i7-7920HQ",nucleos:"4",threads:"8",base:"3.1GHz",boost:"4.1GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:38,id:"i7-8550U",nome:"Intel Core i7-8550U",nucleos:"4",threads:"8",base:"1.8GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:40,id:"i7-8650U",nome:"Intel Core i7-8650U",nucleos:"4",threads:"8",base:"1.9GHz",boost:"4.2GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:26,id:"M3-7Y32",nome:"Intel Core M3-7Y32",nucleos:"2",threads:"4",base:"1.05GHz",boost:"2.3GHz",tdp:"4.5W",socket:"Mobile",ano:"2017"},
{score:22,id:"PentiumGold4410Y",nome:"Intel Pentium Gold 4410Y",nucleos:"2",threads:"4",base:"1.3GHz",boost:"1.3GHz",tdp:"6W",socket:"Mobile",ano:"2017"},
{score:26,id:"PentiumGold4415U",nome:"Intel Pentium Gold 4415U",nucleos:"2",threads:"4",base:"2.9GHz",boost:"2.9GHz",tdp:"15W",socket:"Mobile",ano:"2017"},
{score:22,id:"PentiumGold4415Y",nome:"Intel Pentium Gold 4415Y",nucleos:"2",threads:"4",base:"1.49GHz",boost:"1.49GHz",tdp:"6W",socket:"Mobile",ano:"2017"},
{score:40,id:"XeonE3-1505MV6",nome:"Intel Xeon E3-1505MV6",nucleos:"4",threads:"8",base:"3.0GHz",boost:"3.9GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:44,id:"XeonE3-1535MV6",nome:"Intel Xeon E3-1535MV6",nucleos:"4",threads:"8",base:"3.5GHz",boost:"4.2GHz",tdp:"45W",socket:"Mobile",ano:"2017"},
{score:55,id:"Threadripper1900X",nome:"AMD Ryzen Threadripper 1900X",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.0GHz",tdp:"95W",socket:"sTRX4",ano:"2017"},
{score:60,id:"Threadripper1920X",nome:"AMD Ryzen Threadripper 1920X",nucleos:"12",threads:"24",base:"3.5GHz",boost:"4.0GHz",tdp:"180W",socket:"sTRX4",ano:"2017"},
{score:65,id:"Threadripper1950X",nome:"AMD Ryzen Threadripper 1950X",nucleos:"16",threads:"32",base:"3.4GHz",boost:"4.2GHz",tdp:"180W",socket:"sTRX4",ano:"2017"},
{score:25,id:"Athlon200GE",nome:"AMD Athlon 200GE",nucleos:"4",threads:"4",base:"3.2GHz",boost:"3.0GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:26,id:"Athlon220GE",nome:"AMD Athlon 220GE",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.0GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:27,id:"Athlon240GE",nome:"AMD Athlon 240GE",nucleos:"4",threads:"4",base:"3.8GHz",boost:"3.8GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:25,id:"AthlonPRO200GE",nome:"AMD Athlon PRO 200GE",nucleos:"4",threads:"4",base:"3.2GHz",boost:"3.0GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:35,id:"Ryzen3-2200G",nome:"AMD Ryzen 3 2200G",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.7GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:34,id:"Ryzen3-2200GE",nome:"AMD Ryzen 3 2200GE",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.7GHz",tdp:"35W",socket:"AM4",ano:"2018"},
{score:36,id:"Ryzen3-2300X",nome:"AMD Ryzen 3 2300X",nucleos:"4",threads:"4",base:"3.3GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:35,id:"Ryzen3PRO-2200G",nome:"AMD Ryzen 3 PRO 2200G",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.7GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:34,id:"Ryzen3PRO-2200GE",nome:"AMD Ryzen 3 PRO 2200GE",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.7GHz",tdp:"35W",socket:"AM4",ano:"2018"},
{score:40,id:"Ryzen5-2400G",nome:"AMD Ryzen 5 2400G",nucleos:"4",threads:"8",base:"3.6GHz",boost:"3.9GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:41,id:"Ryzen5-2400GE",nome:"AMD Ryzen 5 2400GE",nucleos:"4",threads:"8",base:"3.8GHz",boost:"4.0GHz",tdp:"35W",socket:"AM4",ano:"2018"},
{score:42,id:"Ryzen5-2500X",nome:"AMD Ryzen 5 2500X",nucleos:"6",threads:"12",base:"3.5GHz",boost:"3.7GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:43,id:"Ryzen5-2600",nome:"AMD Ryzen 5 2600",nucleos:"6",threads:"12",base:"3.4GHz",boost:"3.9GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:42,id:"Ryzen5-2600E",nome:"AMD Ryzen 5 2600E",nucleos:"6",threads:"12",base:"3.0GHz",boost:"3.9GHz",tdp:"45W",socket:"AM4",ano:"2018"},
{score:45,id:"Ryzen5-2600X",nome:"AMD Ryzen 5 2600X",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.25GHz",tdp:"95W",socket:"AM4",ano:"2018"},
{score:40,id:"Ryzen5PRO-2400G",nome:"AMD Ryzen 5 PRO 2400G",nucleos:"4",threads:"8",base:"3.6GHz",boost:"3.9GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:41,id:"Ryzen5PRO-2400GE",nome:"AMD Ryzen 5 PRO 2400GE",nucleos:"4",threads:"8",base:"3.8GHz",boost:"4.0GHz",tdp:"35W",socket:"AM4",ano:"2018"},
{score:43,id:"Ryzen5PRO-2600",nome:"AMD Ryzen 5 PRO 2600",nucleos:"6",threads:"12",base:"3.4GHz",boost:"3.9GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:48,id:"Ryzen7-2700",nome:"AMD Ryzen 7 2700",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.1GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:47,id:"Ryzen7-2700E",nome:"AMD Ryzen 7 2700E",nucleos:"8",threads:"16",base:"2.2GHz",boost:"4.1GHz",tdp:"45W",socket:"AM4",ano:"2018"},
{score:50,id:"Ryzen7-2700X",nome:"AMD Ryzen 7 2700X",nucleos:"8",threads:"16",base:"3.7GHz",boost:"4.3GHz",tdp:"105W",socket:"AM4",ano:"2018"},
{score:48,id:"Ryzen7PRO-2700",nome:"AMD Ryzen 7 PRO 2700",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.1GHz",tdp:"65W",socket:"AM4",ano:"2018"},
{score:50,id:"Ryzen7PRO-2700X",nome:"AMD Ryzen 7 PRO 2700X",nucleos:"8",threads:"16",base:"3.7GHz",boost:"4.3GHz",tdp:"105W",socket:"AM4",ano:"2018"},
{score:22,id:"CeleronG4900",nome:"Intel Celeron G4900",nucleos:"2",threads:"2",base:"3.1GHz",boost:"3.1GHz",tdp:"54W",socket:"LGA1151",ano:"2018"},
{score:20,id:"CeleronG4900T",nome:"Intel Celeron G4900T",nucleos:"2",threads:"2",base:"2.0GHz",boost:"2.0GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:22,id:"CeleronG4920",nome:"Intel Celeron G4920",nucleos:"2",threads:"2",base:"3.2GHz",boost:"3.2GHz",tdp:"54W",socket:"LGA1151",ano:"2018"},
{score:30,id:"i3-8100T",nome:"Intel Core i3-8100T",nucleos:"4",threads:"4",base:"3.1GHz",boost:"3.1GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:31,id:"i3-8300",nome:"Intel Core i3-8300",nucleos:"4",threads:"4",base:"3.2GHz",boost:"3.2GHz",tdp:"65W",socket:"LGA1151",ano:"2018"},
{score:30,id:"i3-8300T",nome:"Intel Core i3-8300T",nucleos:"4",threads:"4",base:"3.2GHz",boost:"3.2GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:38,id:"i5-8400T",nome:"Intel Core i5-8400T",nucleos:"6",threads:"6",base:"2.1GHz",boost:"3.5GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:40,id:"i5-8500",nome:"Intel Core i5-8500",nucleos:"6",threads:"6",base:"3.0GHz",boost:"4.0GHz",tdp:"65W",socket:"LGA1151",ano:"2018"},
{score:38,id:"i5-8500T",nome:"Intel Core i5-8500T",nucleos:"6",threads:"6",base:"2.1GHz",boost:"3.5GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:41,id:"i5-8600",nome:"Intel Core i5-8600",nucleos:"6",threads:"6",base:"3.1GHz",boost:"4.1GHz",tdp:"65W",socket:"LGA1151",ano:"2018"},
{score:39,id:"i5-8600T",nome:"Intel Core i5-8600T",nucleos:"6",threads:"6",base:"2.1GHz",boost:"3.3GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:45,id:"i5-9600K",nome:"Intel Core i5-9600K",nucleos:"6",threads:"6",base:"3.7GHz",boost:"4.6GHz",tdp:"95W",socket:"LGA1151",ano:"2018"},
{score:44,id:"i7-8086K",nome:"Intel Core i7-8086K",nucleos:"4",threads:"8",base:"4.0GHz",boost:"4.0GHz",tdp:"95W",socket:"LGA1151",ano:"2018"},
{score:44,id:"i7-8700T",nome:"Intel Core i7-8700T",nucleos:"6",threads:"12",base:"2.4GHz",boost:"4.0GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:52,id:"i7-9700K",nome:"Intel Core i7-9700K",nucleos:"8",threads:"8",base:"3.8GHz",boost:"5.0GHz",tdp:"95W",socket:"LGA1151",ano:"2018"},
{score:50,id:"i7-9800X",nome:"Intel Core i7-9800X",nucleos:"8",threads:"8",base:"3.8GHz",boost:"4.4GHz",tdp:"125W",socket:"LGA2066",ano:"2018"},
{score:58,id:"i9-9820X",nome:"Intel Core i9-9820X",nucleos:"10",threads:"20",base:"3.5GHz",boost:"4.7GHz",tdp:"160W",socket:"LGA2066",ano:"2018"},
{score:55,id:"i9-9900K",nome:"Intel Core i9-9900K",nucleos:"8",threads:"16",base:"3.6GHz",boost:"5.0GHz",tdp:"95W",socket:"LGA1151",ano:"2018"},
{score:55,id:"i9-9900X",nome:"Intel Core i9-9900X",nucleos:"10",threads:"10",base:"3.5GHz",boost:"4.5GHz",tdp:"135W",socket:"LGA2066",ano:"2018"},
{score:58,id:"i9-9920X",nome:"Intel Core i9-9920X",nucleos:"12",threads:"24",base:"3.5GHz",boost:"4.4GHz",tdp:"135W",socket:"LGA2066",ano:"2018"},
{score:60,id:"i9-9940X",nome:"Intel Core i9-9940X",nucleos:"14",threads:"28",base:"3.1GHz",boost:"4.3GHz",tdp:"135W",socket:"LGA2066",ano:"2018"},
{score:62,id:"i9-9960X",nome:"Intel Core i9-9960X",nucleos:"16",threads:"32",base:"2.8GHz",boost:"4.4GHz",tdp:"165W",socket:"LGA2066",ano:"2018"},
{score:65,id:"i9-9980XE",nome:"Intel Core i9-9980XE",nucleos:"18",threads:"36",base:"2.5GHz",boost:"4.4GHz",tdp:"205W",socket:"LGA2066",ano:"2018"},
{score:26,id:"PentiumGoldG5400",nome:"Intel Pentium Gold G5400",nucleos:"2",threads:"4",base:"3.3GHz",boost:"3.3GHz",tdp:"54W",socket:"LGA1151",ano:"2018"},
{score:24,id:"PentiumGoldG5400T",nome:"Intel Pentium Gold G5400T",nucleos:"2",threads:"4",base:"2.1GHz",boost:"2.1GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:27,id:"PentiumGoldG5500",nome:"Intel Pentium Gold G5500",nucleos:"2",threads:"4",base:"3.8GHz",boost:"3.8GHz",tdp:"54W",socket:"LGA1151",ano:"2018"},
{score:25,id:"PentiumGoldG5500T",nome:"Intel Pentium Gold G5500T",nucleos:"2",threads:"4",base:"2.2GHz",boost:"2.2GHz",tdp:"35W",socket:"LGA1151",ano:"2018"},
{score:28,id:"PentiumGoldG5600",nome:"Intel Pentium Gold G5600",nucleos:"2",threads:"4",base:"4.0GHz",boost:"4.0GHz",tdp:"54W",socket:"LGA1151",ano:"2018"},
{score:30,id:"Ryzen3-2200U",nome:"AMD Ryzen 3 2200U",nucleos:"4",threads:"4",base:"2.5GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:30,id:"Ryzen3-2300U",nome:"AMD Ryzen 3 2300U",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:42,id:"Ryzen5-2600H",nome:"AMD Ryzen 5 2600H",nucleos:"6",threads:"12",base:"3.1GHz",boost:"3.9GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:48,id:"Ryzen7-2800H",nome:"AMD Ryzen 7 2800H",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.0GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:28,id:"i3-7020U",nome:"Intel Core i3-7020U",nucleos:"2",threads:"4",base:"2.3GHz",boost:"2.3GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:32,id:"i3-8100B",nome:"Intel Core i3-8100B",nucleos:"4",threads:"4",base:"3.6GHz",boost:"3.6GHz",tdp:"65W",socket:"LGA1151",ano:"2018"},
{score:32,id:"i3-8100H",nome:"Intel Core i3-8100H",nucleos:"4",threads:"4",base:"2.1GHz",boost:"3.4GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:30,id:"i3-8109U",nome:"Intel Core i3-8109U",nucleos:"2",threads:"4",base:"3.0GHz",boost:"3.0GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:30,id:"i3-8121U",nome:"Intel Core i3-8121U",nucleos:"2",threads:"4",base:"3.0GHz",boost:"3.0GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:28,id:"i3-8130U",nome:"Intel Core i3-8130U",nucleos:"2",threads:"4",base:"2.3GHz",boost:"2.3GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:30,id:"i3-8145U",nome:"Intel Core i3-8145U",nucleos:"2",threads:"4",base:"2.1GHz",boost:"3.9GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:30,id:"i5-8200Y",nome:"Intel Core i5-8200Y",nucleos:"2",threads:"4",base:"1.3GHz",boost:"3.3GHz",tdp:"10W",socket:"Mobile",ano:"2018"},
{score:36,id:"i5-8259U",nome:"Intel Core i5-8259U",nucleos:"4",threads:"8",base:"1.6GHz",boost:"3.8GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:36,id:"i5-8265U",nome:"Intel Core i5-8265U",nucleos:"4",threads:"8",base:"1.6GHz",boost:"3.9GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:36,id:"i5-8269U",nome:"Intel Core i5-8269U",nucleos:"4",threads:"8",base:"1.6GHz",boost:"3.9GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:36,id:"i5-8300H",nome:"Intel Core i5-8300H",nucleos:"4",threads:"4",base:"2.3GHz",boost:"4.0GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:36,id:"i5-8305G",nome:"Intel Core i5-8305G",nucleos:"4",threads:"8",base:"2.9GHz",boost:"4.0GHz",tdp:"28W",socket:"Mobile",ano:"2018"},
{score:40,id:"i5-8400B",nome:"Intel Core i5-8400B",nucleos:"6",threads:"6",base:"2.8GHz",boost:"4.0GHz",tdp:"95W",socket:"LGA1151",ano:"2018"},
{score:36,id:"i5-8400H",nome:"Intel Core i5-8400H",nucleos:"4",threads:"4",base:"2.5GHz",boost:"4.0GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:40,id:"i5-8500B",nome:"Intel Core i5-8500B",nucleos:"6",threads:"6",base:"3.0GHz",boost:"4.0GHz",tdp:"65W",socket:"LGA1151",ano:"2018"},
{score:40,id:"i7-8559U",nome:"Intel Core i7-8559U",nucleos:"4",threads:"8",base:"1.8GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:40,id:"i7-8565U",nome:"Intel Core i7-8565U",nucleos:"4",threads:"8",base:"1.8GHz",boost:"4.1GHz",tdp:"15W",socket:"Mobile",ano:"2018"},
{score:46,id:"i7-8700B",nome:"Intel Core i7-8700B",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1151",ano:"2018"},
{score:40,id:"i7-8705G",nome:"Intel Core i7-8705G",nucleos:"4",threads:"8",base:"3.1GHz",boost:"4.1GHz",tdp:"28W",socket:"Mobile",ano:"2018"},
{score:40,id:"i7-8706G",nome:"Intel Core i7-8706G",nucleos:"4",threads:"8",base:"3.1GHz",boost:"4.1GHz",tdp:"28W",socket:"Mobile",ano:"2018"},
{score:40,id:"i7-8709G",nome:"Intel Core i7-8709G",nucleos:"4",threads:"8",base:"3.1GHz",boost:"4.1GHz",tdp:"28W",socket:"Mobile",ano:"2018"},
{score:44,id:"i7-8750H",nome:"Intel Core i7-8750H",nucleos:"6",threads:"12",base:"2.2GHz",boost:"4.1GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:40,id:"i7-8809G",nome:"Intel Core i7-8809G",nucleos:"4",threads:"8",base:"3.1GHz",boost:"4.2GHz",tdp:"28W",socket:"Mobile",ano:"2018"},
{score:46,id:"i7-8850H",nome:"Intel Core i7-8850H",nucleos:"6",threads:"12",base:"2.6GHz",boost:"4.3GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:50,id:"i9-8950HK",nome:"Intel Core i9-8950HK",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.8GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:28,id:"m3-8100Y",nome:"Intel Core m3-8100Y",nucleos:"2",threads:"4",base:"1.1GHz",boost:"3.4GHz",tdp:"10W",socket:"Mobile",ano:"2018"},
{score:44,id:"XeonE-2176M",nome:"Intel Xeon E-2176M",nucleos:"6",threads:"12",base:"2.7GHz",boost:"4.4GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:46,id:"XeonE-2186M",nome:"Intel Xeon E-2186M",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.8GHz",tdp:"45W",socket:"Mobile",ano:"2018"},
{score:60,id:"Threadripper2920X",nome:"AMD Ryzen Threadripper 2920X",nucleos:"12",threads:"24",base:"3.5GHz",boost:"4.0GHz",tdp:"180W",socket:"sTRX4",ano:"2018"},
{score:65,id:"Threadripper2950X",nome:"AMD Ryzen Threadripper 2950X",nucleos:"16",threads:"32",base:"3.5GHz",boost:"4.4GHz",tdp:"180W",socket:"sTRX4",ano:"2018"},
{score:70,id:"Threadripper2970WX",nome:"AMD Ryzen Threadripper 2970WX",nucleos:"24",threads:"48",base:"3.0GHz",boost:"4.2GHz",tdp:"255W",socket:"sWRX8",ano:"2018"},
{score:72,id:"Threadripper2990WX",nome:"AMD Ryzen Threadripper 2990WX",nucleos:"32",threads:"64",base:"3.0GHz",boost:"4.2GHz",tdp:"250W",socket:"sWRX8",ano:"2018"},
{score:68,id:"XeonW-3175X",nome:"Intel Xeon W-3175X",nucleos:"28",threads:"56",base:"2.1GHz",boost:"4.0GHz",tdp:"165W",socket:"LGA3647",ano:"2018"},
{score:28,id:"Athlon3000G",nome:"AMD Athlon 3000G",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.5GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:26,id:"Athlon300GE",nome:"AMD Athlon 300GE",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.5GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:27,id:"Athlon320GE",nome:"AMD Athlon 320GE",nucleos:"4",threads:"4",base:"3.8GHz",boost:"3.8GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:26,id:"AthlonPRO300GE",nome:"AMD Athlon PRO 300GE",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.5GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:36,id:"Ryzen3-3200G",nome:"AMD Ryzen 3 3200G",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:35,id:"Ryzen3-3200GE",nome:"AMD Ryzen 3 3200GE",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.0GHz",tdp:"35W",socket:"AM4",ano:"2019"},
{score:36,id:"Ryzen3PRO-3200G",nome:"AMD Ryzen 3 PRO 3200G",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:35,id:"Ryzen3PRO-3200GE",nome:"AMD Ryzen 3 PRO 3200GE",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.0GHz",tdp:"35W",socket:"AM4",ano:"2019"},
{score:42,id:"Ryzen5-1600AF",nome:"AMD Ryzen 5 1600 (AF)",nucleos:"6",threads:"12",base:"3.2GHz",boost:"3.6GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:38,id:"Ryzen5-3400G",nome:"AMD Ryzen 5 3400G",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:37,id:"Ryzen5-3400GE",nome:"AMD Ryzen 5 3400GE",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.2GHz",tdp:"35W",socket:"AM4",ano:"2019"},
{score:42,id:"Ryzen5-3500",nome:"AMD Ryzen 5 3500",nucleos:"6",threads:"6",base:"3.6GHz",boost:"4.1GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:48,id:"Ryzen5-3600",nome:"AMD Ryzen 5 3600",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:49,id:"Ryzen5-3600X",nome:"AMD Ryzen 5 3600X",nucleos:"6",threads:"12",base:"3.8GHz",boost:"4.4GHz",tdp:"95W",socket:"AM4",ano:"2019"},
{score:38,id:"Ryzen5PRO-3400G",nome:"AMD Ryzen 5 PRO 3400G",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:37,id:"Ryzen5PRO-3400GE",nome:"AMD Ryzen 5 PRO 3400GE",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.2GHz",tdp:"35W",socket:"AM4",ano:"2019"},
{score:48,id:"Ryzen5PRO-3600",nome:"AMD Ryzen 5 PRO 3600",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:55,id:"Ryzen7-3700X",nome:"AMD Ryzen 7 3700X",nucleos:"8",threads:"16",base:"3.6GHz",boost:"4.4GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:57,id:"Ryzen7-3800X",nome:"AMD Ryzen 7 3800X",nucleos:"8",threads:"16",base:"3.9GHz",boost:"4.5GHz",tdp:"95W",socket:"AM4",ano:"2019"},
{score:52,id:"Ryzen7PRO-3700",nome:"AMD Ryzen 7 PRO 3700",nucleos:"8",threads:"16",base:"3.0GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:62,id:"Ryzen9-3900",nome:"AMD Ryzen 9 3900",nucleos:"12",threads:"24",base:"3.0GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:65,id:"Ryzen9-3900X",nome:"AMD Ryzen 9 3900X",nucleos:"12",threads:"24",base:"3.8GHz",boost:"4.6GHz",tdp:"105W",socket:"AM4",ano:"2019"},
{score:70,id:"Ryzen9-3950X",nome:"AMD Ryzen 9 3950X",nucleos:"16",threads:"32",base:"4.4GHz",boost:"4.7GHz",tdp:"105W",socket:"AM4",ano:"2019"},
{score:62,id:"Ryzen9PRO-3900",nome:"AMD Ryzen 9 PRO 3900",nucleos:"12",threads:"24",base:"3.0GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2019"},
{score:22,id:"CeleronG4930",nome:"Intel Celeron G4930",nucleos:"2",threads:"2",base:"3.0GHz",boost:"3.0GHz",tdp:"54W",socket:"LGA1151",ano:"2019"},
{score:20,id:"CeleronG4930T",nome:"Intel Celeron G4930T",nucleos:"2",threads:"2",base:"2.0GHz",boost:"2.0GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:23,id:"CeleronG4950",nome:"Intel Celeron G4950",nucleos:"2",threads:"2",base:"3.5GHz",boost:"3.5GHz",tdp:"54W",socket:"LGA1151",ano:"2019"},
{score:33,id:"i3-9100",nome:"Intel Core i3-9100",nucleos:"4",threads:"4",base:"3.6GHz",boost:"3.6GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:33,id:"i3-9100F",nome:"Intel Core i3-9100F",nucleos:"4",threads:"4",base:"3.6GHz",boost:"3.6GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:31,id:"i3-9100T",nome:"Intel Core i3-9100T",nucleos:"4",threads:"4",base:"3.1GHz",boost:"3.1GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:34,id:"i3-9300",nome:"Intel Core i3-9300",nucleos:"4",threads:"4",base:"3.8GHz",boost:"3.8GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:32,id:"i3-9300T",nome:"Intel Core i3-9300T",nucleos:"4",threads:"4",base:"3.2GHz",boost:"3.2GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:34,id:"i3-9320",nome:"Intel Core i3-9320",nucleos:"4",threads:"4",base:"3.8GHz",boost:"3.8GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:35,id:"i3-9350K",nome:"Intel Core i3-9350K",nucleos:"4",threads:"4",base:"4.0GHz",boost:"4.0GHz",tdp:"91W",socket:"LGA1151",ano:"2019"},
{score:35,id:"i3-9350KF",nome:"Intel Core i3-9350KF",nucleos:"4",threads:"4",base:"4.0GHz",boost:"4.0GHz",tdp:"91W",socket:"LGA1151",ano:"2019"},
{score:42,id:"i5-9400",nome:"Intel Core i5-9400",nucleos:"6",threads:"6",base:"2.9GHz",boost:"4.1GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:42,id:"i5-9400F",nome:"Intel Core i5-9400F",nucleos:"6",threads:"6",base:"2.9GHz",boost:"4.1GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:40,id:"i5-9400T",nome:"Intel Core i5-9400T",nucleos:"6",threads:"6",base:"2.0GHz",boost:"3.7GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:43,id:"i5-9500",nome:"Intel Core i5-9500",nucleos:"6",threads:"6",base:"3.0GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:43,id:"i5-9500F",nome:"Intel Core i5-9500F",nucleos:"6",threads:"6",base:"3.0GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:41,id:"i5-9500T",nome:"Intel Core i5-9500T",nucleos:"6",threads:"6",base:"2.0GHz",boost:"3.8GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:45,id:"i5-9600",nome:"Intel Core i5-9600",nucleos:"6",threads:"6",base:"3.1GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:46,id:"i5-9600KF",nome:"Intel Core i5-9600KF",nucleos:"6",threads:"6",base:"3.7GHz",boost:"4.6GHz",tdp:"95W",socket:"LGA1151",ano:"2019"},
{score:43,id:"i5-9600T",nome:"Intel Core i5-9600T",nucleos:"6",threads:"6",base:"2.3GHz",boost:"4.1GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:50,id:"i7-9700",nome:"Intel Core i7-9700",nucleos:"8",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:50,id:"i7-9700F",nome:"Intel Core i7-9700F",nucleos:"8",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:53,id:"i7-9700KF",nome:"Intel Core i7-9700KF",nucleos:"8",threads:"8",base:"3.6GHz",boost:"5.0GHz",tdp:"95W",socket:"LGA1151",ano:"2019"},
{score:48,id:"i7-9700T",nome:"Intel Core i7-9700T",nucleos:"8",threads:"8",base:"2.0GHz",boost:"4.2GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:62,id:"i9-10900X",nome:"Intel Core i9-10900X",nucleos:"10",threads:"20",base:"3.7GHz",boost:"5.3GHz",tdp:"165W",socket:"LGA2066",ano:"2019"},
{score:64,id:"i9-10920X",nome:"Intel Core i9-10920X",nucleos:"12",threads:"24",base:"3.5GHz",boost:"5.1GHz",tdp:"165W",socket:"LGA2066",ano:"2019"},
{score:66,id:"i9-10940X",nome:"Intel Core i9-10940X",nucleos:"14",threads:"28",base:"3.3GHz",boost:"5.7GHz",tdp:"160W",socket:"LGA2066",ano:"2019"},
{score:70,id:"i9-10980XE",nome:"Intel Core i9-10980XE",nucleos:"18",threads:"36",base:"2.8GHz",boost:"5.6GHz",tdp:"205W",socket:"LGA2066",ano:"2019"},
{score:55,id:"i9-9900",nome:"Intel Core i9-9900",nucleos:"8",threads:"16",base:"3.6GHz",boost:"5.0GHz",tdp:"65W",socket:"LGA1151",ano:"2019"},
{score:56,id:"i9-9900KF",nome:"Intel Core i9-9900KF",nucleos:"8",threads:"16",base:"3.6GHz",boost:"5.0GHz",tdp:"95W",socket:"LGA1151",ano:"2019"},
{score:58,id:"i9-9900KS",nome:"Intel Core i9-9900KS",nucleos:"8",threads:"16",base:"4.0GHz",boost:"5.0GHz",tdp:"90W",socket:"LGA1151",ano:"2019"},
{score:52,id:"i9-9900T",nome:"Intel Core i9-9900T",nucleos:"8",threads:"16",base:"2.0GHz",boost:"4.5GHz",tdp:"45W",socket:"LGA1151",ano:"2019"},
{score:27,id:"PentiumGoldG5420",nome:"Intel Pentium Gold G5420",nucleos:"2",threads:"4",base:"3.8GHz",boost:"3.8GHz",tdp:"54W",socket:"LGA1151",ano:"2019"},
{score:25,id:"PentiumGoldG5420T",nome:"Intel Pentium Gold G5420T",nucleos:"2",threads:"4",base:"2.1GHz",boost:"2.1GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:26,id:"PentiumGoldG5600T",nome:"Intel Pentium Gold G5600T",nucleos:"2",threads:"4",base:"2.3GHz",boost:"2.3GHz",tdp:"35W",socket:"LGA1151",ano:"2019"},
{score:28,id:"PentiumGoldG5620",nome:"Intel Pentium Gold G5620",nucleos:"2",threads:"4",base:"4.0GHz",boost:"4.0GHz",tdp:"54W",socket:"LGA1151",ano:"2019"},
{score:25,id:"Athlon300U",nome:"AMD Athlon 300U",nucleos:"2",threads:"4",base:"2.4GHz",boost:"2.4GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:24,id:"AthlonPRO200U",nome:"AMD Athlon PRO 200U",nucleos:"2",threads:"4",base:"2.4GHz",boost:"2.4GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:25,id:"AthlonPRO300U",nome:"AMD Athlon PRO 300U",nucleos:"2",threads:"4",base:"2.4GHz",boost:"2.4GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:32,id:"Ryzen3-3200U",nome:"AMD Ryzen 3 3200U",nucleos:"4",threads:"4",base:"2.6GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:32,id:"Ryzen3-3300U",nome:"AMD Ryzen 3 3300U",nucleos:"4",threads:"4",base:"2.1GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:32,id:"Ryzen3-3350U",nome:"AMD Ryzen 3 3350U",nucleos:"4",threads:"4",base:"2.1GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:30,id:"Ryzen3PRO-2300U",nome:"AMD Ryzen 3 PRO 2300U",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:32,id:"Ryzen3PRO-3300U",nome:"AMD Ryzen 3 PRO 3300U",nucleos:"4",threads:"4",base:"2.1GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:38,id:"Ryzen5-3500U",nome:"AMD Ryzen 5 3500U",nucleos:"4",threads:"8",base:"2.1GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:40,id:"Ryzen5-3550H",nome:"AMD Ryzen 5 3550H",nucleos:"4",threads:"8",base:"2.1GHz",boost:"3.7GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:38,id:"Ryzen5-3580U",nome:"AMD Ryzen 5 3580U",nucleos:"4",threads:"8",base:"2.0GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:32,id:"Ryzen5PRO-2500U",nome:"AMD Ryzen 5 PRO 2500U",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.6GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:38,id:"Ryzen5PRO-3500U",nome:"AMD Ryzen 5 PRO 3500U",nucleos:"4",threads:"8",base:"2.1GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:42,id:"Ryzen7-3700U",nome:"AMD Ryzen 7 3700U",nucleos:"4",threads:"8",base:"2.3GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:44,id:"Ryzen7-3750H",nome:"AMD Ryzen 7 3750H",nucleos:"4",threads:"8",base:"2.3GHz",boost:"4.0GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:42,id:"Ryzen7-3780U",nome:"AMD Ryzen 7 3780U",nucleos:"4",threads:"8",base:"2.0GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:40,id:"Ryzen7PRO-2700U",nome:"AMD Ryzen 7 PRO 2700U",nucleos:"4",threads:"8",base:"2.2GHz",boost:"3.8GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:42,id:"Ryzen7PRO-3700U",nome:"AMD Ryzen 7 PRO 3700U",nucleos:"4",threads:"8",base:"2.3GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:20,id:"Celeron3867U",nome:"Intel Celeron 3867U",nucleos:"2",threads:"2",base:"1.8GHz",boost:"1.8GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:20,id:"Celeron4205U",nome:"Intel Celeron 4205U",nucleos:"2",threads:"2",base:"1.8GHz",boost:"1.8GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:21,id:"Celeron4305U",nome:"Intel Celeron 4305U",nucleos:"2",threads:"2",base:"2.3GHz",boost:"2.3GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:20,id:"Celeron5205U",nome:"Intel Celeron 5205U",nucleos:"2",threads:"2",base:"1.9GHz",boost:"1.9GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:30,id:"i3-1000G1",nome:"Intel Core i3-1000G1",nucleos:"2",threads:"4",base:"3.4GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:31,id:"i3-1000G4",nome:"Intel Core i3-1000G4",nucleos:"2",threads:"4",base:"3.6GHz",boost:"3.6GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:32,id:"i3-1005G1",nome:"Intel Core i3-1005G1",nucleos:"2",threads:"4",base:"3.7GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:34,id:"i3-10110U",nome:"Intel Core i3-10110U",nucleos:"4",threads:"4",base:"2.1GHz",boost:"4.2GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:30,id:"i3-10110Y",nome:"Intel Core i3-10110Y",nucleos:"2",threads:"4",base:"1.5GHz",boost:"4.2GHz",tdp:"8W",socket:"Mobile",ano:"2019"},
{score:30,id:"i3-8140U",nome:"Intel Core i3-8140U",nucleos:"2",threads:"4",base:"2.1GHz",boost:"3.9GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:38,id:"i5-10210U",nome:"Intel Core i5-10210U",nucleos:"4",threads:"8",base:"1.6GHz",boost:"4.2GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:32,id:"i5-10210Y",nome:"Intel Core i5-10210Y",nucleos:"2",threads:"4",base:"1.3GHz",boost:"4.0GHz",tdp:"8W",socket:"Mobile",ano:"2019"},
{score:38,id:"i5-1030G4",nome:"Intel Core i5-1030G4",nucleos:"4",threads:"8",base:"3.0GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:38,id:"i5-1030G7",nome:"Intel Core i5-1030G7",nucleos:"4",threads:"8",base:"3.0GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:32,id:"i5-10310Y",nome:"Intel Core i5-10310Y",nucleos:"2",threads:"4",base:"1.3GHz",boost:"4.3GHz",tdp:"8W",socket:"Mobile",ano:"2019"},
{score:36,id:"i5-1035G1",nome:"Intel Core i5-1035G1",nucleos:"4",threads:"8",base:"1.1GHz",boost:"3.6GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:36,id:"i5-1035G4",nome:"Intel Core i5-1035G4",nucleos:"4",threads:"8",base:"1.1GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:36,id:"i5-1035G7",nome:"Intel Core i5-1035G7",nucleos:"4",threads:"8",base:"1.1GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:30,id:"i5-8210Y",nome:"Intel Core i5-8210Y",nucleos:"2",threads:"4",base:"1.8GHz",boost:"3.6GHz",tdp:"8W",socket:"Mobile",ano:"2019"},
{score:36,id:"i5-8257U",nome:"Intel Core i5-8257U",nucleos:"4",threads:"8",base:"1.4GHz",boost:"3.6GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:36,id:"i5-8260U",nome:"Intel Core i5-8260U",nucleos:"4",threads:"8",base:"1.6GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:36,id:"i5-8279U",nome:"Intel Core i5-8279U",nucleos:"4",threads:"8",base:"1.4GHz",boost:"3.8GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:30,id:"i5-8310Y",nome:"Intel Core i5-8310Y",nucleos:"2",threads:"4",base:"1.7GHz",boost:"3.6GHz",tdp:"8W",socket:"Mobile",ano:"2019"},
{score:37,id:"i5-8365U",nome:"Intel Core i5-8365U",nucleos:"4",threads:"8",base:"1.6GHz",boost:"4.1GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:38,id:"i5-9300H",nome:"Intel Core i5-9300H",nucleos:"4",threads:"4",base:"2.4GHz",boost:"4.1GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:38,id:"i5-9300HF",nome:"Intel Core i5-9300HF",nucleos:"4",threads:"4",base:"2.4GHz",boost:"4.1GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:40,id:"i5-9400H",nome:"Intel Core i5-9400H",nucleos:"4",threads:"4",base:"2.5GHz",boost:"4.6GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:42,id:"i7-10510U",nome:"Intel Core i7-10510U",nucleos:"4",threads:"8",base:"1.8GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:36,id:"i7-10510Y",nome:"Intel Core i7-10510Y",nucleos:"2",threads:"4",base:"1.3GHz",boost:"5.0GHz",tdp:"8W",socket:"Mobile",ano:"2019"},
{score:42,id:"i7-1060G7",nome:"Intel Core i7-1060G7",nucleos:"4",threads:"8",base:"3.0GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:42,id:"i7-1065G7",nome:"Intel Core i7-1065G7",nucleos:"4",threads:"8",base:"1.3GHz",boost:"3.9GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:42,id:"i7-10710U",nome:"Intel Core i7-10710U",nucleos:"4",threads:"8",base:"1.1GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:34,id:"i7-8500Y",nome:"Intel Core i7-8500Y",nucleos:"2",threads:"4",base:"1.5GHz",boost:"3.5GHz",tdp:"8W",socket:"Mobile",ano:"2019"},
{score:40,id:"i7-8557U",nome:"Intel Core i7-8557U",nucleos:"4",threads:"8",base:"1.7GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:40,id:"i7-8569U",nome:"Intel Core i7-8569U",nucleos:"4",threads:"8",base:"1.8GHz",boost:"4.1GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:42,id:"i7-8665U",nome:"Intel Core i7-8665U",nucleos:"4",threads:"8",base:"1.9GHz",boost:"4.8GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:46,id:"i7-9750H",nome:"Intel Core i7-9750H",nucleos:"6",threads:"12",base:"2.6GHz",boost:"4.5GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:46,id:"i7-9750HF",nome:"Intel Core i7-9750HF",nucleos:"6",threads:"12",base:"2.6GHz",boost:"4.5GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:48,id:"i7-9850H",nome:"Intel Core i7-9850H",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.8GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:52,id:"i9-9880H",nome:"Intel Core i9-9880H",nucleos:"8",threads:"16",base:"2.3GHz",boost:"4.8GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:54,id:"i9-9980HK",nome:"Intel Core i9-9980HK",nucleos:"8",threads:"16",base:"2.5GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:26,id:"PentiumGold4417U",nome:"Intel Pentium Gold 4417U",nucleos:"2",threads:"4",base:"3.3GHz",boost:"3.3GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:24,id:"PentiumGold4425Y",nome:"Intel Pentium Gold 4425Y",nucleos:"2",threads:"4",base:"1.7GHz",boost:"1.7GHz",tdp:"8W",socket:"Mobile",ano:"2019"},
{score:26,id:"PentiumGold5405U",nome:"Intel Pentium Gold 5405U",nucleos:"2",threads:"4",base:"2.3GHz",boost:"2.3GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:27,id:"PentiumGold6405U",nome:"Intel Pentium Gold 6405U",nucleos:"2",threads:"4",base:"2.8GHz",boost:"2.8GHz",tdp:"15W",socket:"Mobile",ano:"2019"},
{score:44,id:"XeonE-2276M",nome:"Intel Xeon E-2276M",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.4GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:46,id:"XeonE-2286M",nome:"Intel Xeon E-2286M",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.8GHz",tdp:"45W",socket:"Mobile",ano:"2019"},
{score:72,id:"Threadripper3960X",nome:"AMD Ryzen Threadripper 3960X",nucleos:"24",threads:"48",base:"3.8GHz",boost:"4.6GHz",tdp:"280W",socket:"sTRX4",ano:"2019"},
{score:75,id:"Threadripper3970X",nome:"AMD Ryzen Threadripper 3970X",nucleos:"32",threads:"64",base:"3.7GHz",boost:"4.5GHz",tdp:"280W",socket:"sTRX4",ano:"2019"},
{score:45,id:"XeonW-2223",nome:"Intel Xeon W-2223",nucleos:"4",threads:"8",base:"3.5GHz",boost:"4.7GHz",tdp:"95W",socket:"LGA2066",ano:"2019"},
{score:46,id:"XeonW-2225",nome:"Intel Xeon W-2225",nucleos:"4",threads:"8",base:"4.1GHz",boost:"4.4GHz",tdp:"95W",socket:"LGA2066",ano:"2019"},
{score:50,id:"XeonW-2235",nome:"Intel Xeon W-2235",nucleos:"6",threads:"12",base:"3.8GHz",boost:"4.8GHz",tdp:"130W",socket:"LGA2066",ano:"2019"},
{score:54,id:"XeonW-2245",nome:"Intel Xeon W-2245",nucleos:"8",threads:"16",base:"3.9GHz",boost:"5.1GHz",tdp:"130W",socket:"LGA2066",ano:"2019"},
{score:52,id:"XeonW-2255",nome:"Intel Xeon W-2255",nucleos:"8",threads:"16",base:"3.0GHz",boost:"4.2GHz",tdp:"135W",socket:"LGA2066",ano:"2019"},
{score:56,id:"XeonW-2265",nome:"Intel Xeon W-2265",nucleos:"10",threads:"20",base:"3.0GHz",boost:"4.5GHz",tdp:"135W",socket:"LGA2066",ano:"2019"},
{score:60,id:"XeonW-2275",nome:"Intel Xeon W-2275",nucleos:"14",threads:"28",base:"3.3GHz",boost:"4.7GHz",tdp:"135W",socket:"LGA2066",ano:"2019"},
{score:65,id:"XeonW-2295",nome:"Intel Xeon W-2295",nucleos:"18",threads:"36",base:"3.0GHz",boost:"4.2GHz",tdp:"165W",socket:"LGA2066",ano:"2019"},
{score:50,id:"XeonW-3223",nome:"Intel Xeon W-3223",nucleos:"6",threads:"12",base:"3.5GHz",boost:"4.7GHz",tdp:"140W",socket:"LGA4189",ano:"2019"},
{score:52,id:"XeonW-3225",nome:"Intel Xeon W-3225",nucleos:"6",threads:"12",base:"4.0GHz",boost:"4.8GHz",tdp:"140W",socket:"LGA4189",ano:"2019"},
{score:55,id:"XeonW-3235",nome:"Intel Xeon W-3235",nucleos:"8",threads:"16",base:"3.3GHz",boost:"4.5GHz",tdp:"155W",socket:"LGA4189",ano:"2019"},
{score:58,id:"XeonW-3245",nome:"Intel Xeon W-3245",nucleos:"10",threads:"20",base:"3.2GHz",boost:"4.6GHz",tdp:"155W",socket:"LGA4189",ano:"2019"},
{score:58,id:"XeonW-3245M",nome:"Intel Xeon W-3245M",nucleos:"10",threads:"20",base:"3.2GHz",boost:"4.6GHz",tdp:"155W",socket:"LGA4189",ano:"2019"},
{score:62,id:"XeonW-3265",nome:"Intel Xeon W-3265",nucleos:"12",threads:"24",base:"3.2GHz",boost:"4.8GHz",tdp:"155W",socket:"LGA4189",ano:"2019"},
{score:62,id:"XeonW-3265M",nome:"Intel Xeon W-3265M",nucleos:"12",threads:"24",base:"3.2GHz",boost:"4.8GHz",tdp:"155W",socket:"LGA4189",ano:"2019"},
{score:65,id:"XeonW-3275",nome:"Intel Xeon W-3275",nucleos:"18",threads:"36",base:"2.5GHz",boost:"4.1GHz",tdp:"155W",socket:"LGA4189",ano:"2019"},
{score:65,id:"XeonW-3275M",nome:"Intel Xeon W-3275M",nucleos:"18",threads:"36",base:"2.5GHz",boost:"4.1GHz",tdp:"155W",socket:"LGA4189",ano:"2019"}
,{score:28,id:"AthlonGold3150G",nome:"AMD Athlon Gold 3150G",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:27,id:"AthlonGold3150GE",nome:"AMD Athlon Gold 3150GE",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.2GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:28,id:"AthlonGoldPRO3150G",nome:"AMD Athlon Gold PRO 3150G",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:27,id:"AthlonGoldPRO3150GE",nome:"AMD Athlon Gold PRO 3150GE",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.2GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:26,id:"AthlonSilver3050GE",nome:"AMD Athlon Silver 3050GE",nucleos:"4",threads:"4",base:"3.4GHz",boost:"3.4GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:26,id:"AthlonSilverPRO3125GE",nome:"AMD Athlon Silver PRO 3125GE",nucleos:"4",threads:"4",base:"3.4GHz",boost:"3.4GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:35,id:"Ryzen3-3100",nome:"AMD Ryzen 3 3100",nucleos:"4",threads:"8",base:"3.6GHz",boost:"3.8GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:36,id:"Ryzen3-3300X",nome:"AMD Ryzen 3 3300X",nucleos:"4",threads:"8",base:"3.8GHz",boost:"4.3GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:36,id:"Ryzen3-4300G",nome:"AMD Ryzen 3 4300G",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:35,id:"Ryzen3-4300GE",nome:"AMD Ryzen 3 4300GE",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.0GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:36,id:"Ryzen3PRO-4350G",nome:"AMD Ryzen 3 PRO 4350G",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:35,id:"Ryzen3PRO-4350GE",nome:"AMD Ryzen 3 PRO 4350GE",nucleos:"4",threads:"4",base:"3.8GHz",boost:"4.0GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:51,id:"Ryzen5-3600XT",nome:"AMD Ryzen 5 3600XT",nucleos:"6",threads:"12",base:"3.8GHz",boost:"4.5GHz",tdp:"95W",socket:"AM4",ano:"2020"}
,{score:48,id:"Ryzen5-4600G",nome:"AMD Ryzen 5 4600G",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:46,id:"Ryzen5-4600GE",nome:"AMD Ryzen 5 4600GE",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.2GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:55,id:"Ryzen5-5600X",nome:"AMD Ryzen 5 5600X",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.6GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:36,id:"Ryzen5PRO-3350G",nome:"AMD Ryzen 5 PRO 3350G",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:35,id:"Ryzen5PRO-3350GE",nome:"AMD Ryzen 5 PRO 3350GE",nucleos:"4",threads:"4",base:"3.6GHz",boost:"4.0GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:48,id:"Ryzen5PRO-4650G",nome:"AMD Ryzen 5 PRO 4650G",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:46,id:"Ryzen5PRO-4650GE",nome:"AMD Ryzen 5 PRO 4650GE",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.2GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:59,id:"Ryzen7-3800XT",nome:"AMD Ryzen 7 3800XT",nucleos:"8",threads:"16",base:"3.4GHz",boost:"4.0GHz",tdp:"95W",socket:"AM4",ano:"2020"}
,{score:54,id:"Ryzen7-4700G",nome:"AMD Ryzen 7 4700G",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.3GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:52,id:"Ryzen7-4700GE",nome:"AMD Ryzen 7 4700GE",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.3GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:63,id:"Ryzen7-5800X",nome:"AMD Ryzen 7 5800X",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.7GHz",tdp:"105W",socket:"AM4",ano:"2020"}
,{score:54,id:"Ryzen7PRO-4750G",nome:"AMD Ryzen 7 PRO 4750G",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.3GHz",tdp:"65W",socket:"AM4",ano:"2020"}
,{score:52,id:"Ryzen7PRO-4750GE",nome:"AMD Ryzen 7 PRO 4750GE",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.3GHz",tdp:"35W",socket:"AM4",ano:"2020"}
,{score:67,id:"Ryzen9-3900XT",nome:"AMD Ryzen 9 3900XT",nucleos:"12",threads:"24",base:"3.7GHz",boost:"4.6GHz",tdp:"105W",socket:"AM4",ano:"2020"}
,{score:72,id:"Ryzen9-5900X",nome:"AMD Ryzen 9 5900X",nucleos:"12",threads:"24",base:"3.8GHz",boost:"4.8GHz",tdp:"105W",socket:"AM4",ano:"2020"}
,{score:78,id:"Ryzen9-5950X",nome:"AMD Ryzen 9 5950X",nucleos:"16",threads:"32",base:"3.4GHz",boost:"4.9GHz",tdp:"105W",socket:"AM4",ano:"2020"}
,{score:64,id:"AppleM1-7GPU",nome:"Apple M1 (7-core GPU)",nucleos:"8",threads:"8",base:"3.2GHz",boost:"3.2GHz",tdp:"15W",socket:"Apple Silicon",ano:"2020"}
,{score:65,id:"AppleM1-8GPU",nome:"Apple M1 (8-core GPU)",nucleos:"8",threads:"8",base:"3.2GHz",boost:"3.2GHz",tdp:"15W",socket:"Apple Silicon",ano:"2020"}
,{score:22,id:"CeleronG5900",nome:"Intel Celeron G5900",nucleos:"2",threads:"2",base:"3.5GHz",boost:"3.5GHz",tdp:"54W",socket:"LGA1200",ano:"2020"}
,{score:20,id:"CeleronG5900T",nome:"Intel Celeron G5900T",nucleos:"2",threads:"2",base:"2.0GHz",boost:"2.0GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:23,id:"CeleronG5905",nome:"Intel Celeron G5905",nucleos:"2",threads:"2",base:"3.5GHz",boost:"3.5GHz",tdp:"54W",socket:"LGA1200",ano:"2020"}
,{score:20,id:"CeleronG5905T",nome:"Intel Celeron G5905T",nucleos:"2",threads:"2",base:"2.0GHz",boost:"2.0GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:22,id:"CeleronG5920",nome:"Intel Celeron G5920",nucleos:"2",threads:"2",base:"3.2GHz",boost:"3.2GHz",tdp:"54W",socket:"LGA1200",ano:"2020"}
,{score:23,id:"CeleronG5925",nome:"Intel Celeron G5925",nucleos:"2",threads:"2",base:"3.3GHz",boost:"3.3GHz",tdp:"54W",socket:"LGA1200",ano:"2020"}
,{score:33,id:"i3-10100",nome:"Intel Core i3-10100",nucleos:"4",threads:"4",base:"3.6GHz",boost:"3.6GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:33,id:"i3-10100F",nome:"Intel Core i3-10100F",nucleos:"4",threads:"4",base:"3.6GHz",boost:"3.6GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:31,id:"i3-10100T",nome:"Intel Core i3-10100T",nucleos:"4",threads:"4",base:"3.1GHz",boost:"3.1GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:34,id:"i3-10300",nome:"Intel Core i3-10300",nucleos:"4",threads:"4",base:"3.5GHz",boost:"3.5GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:32,id:"i3-10300T",nome:"Intel Core i3-10300T",nucleos:"4",threads:"4",base:"3.0GHz",boost:"3.0GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:35,id:"i3-10320",nome:"Intel Core i3-10320",nucleos:"4",threads:"4",base:"3.8GHz",boost:"3.8GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:43,id:"i5-10400",nome:"Intel Core i5-10400",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.3GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:43,id:"i5-10400F",nome:"Intel Core i5-10400F",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.3GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:40,id:"i5-10400T",nome:"Intel Core i5-10400T",nucleos:"6",threads:"12",base:"2.0GHz",boost:"3.9GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:44,id:"i5-10500",nome:"Intel Core i5-10500",nucleos:"6",threads:"12",base:"3.1GHz",boost:"4.5GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:41,id:"i5-10500T",nome:"Intel Core i5-10500T",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.2GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:46,id:"i5-10600",nome:"Intel Core i5-10600",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:48,id:"i5-10600K",nome:"Intel Core i5-10600K",nucleos:"6",threads:"12",base:"4.1GHz",boost:"4.8GHz",tdp:"125W",socket:"LGA1200",ano:"2020"}
,{score:48,id:"i5-10600KF",nome:"Intel Core i5-10600KF",nucleos:"6",threads:"12",base:"4.1GHz",boost:"4.8GHz",tdp:"125W",socket:"LGA1200",ano:"2020"}
,{score:43,id:"i5-10600T",nome:"Intel Core i5-10600T",nucleos:"6",threads:"12",base:"2.4GHz",boost:"4.4GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:52,id:"i7-10700",nome:"Intel Core i7-10700",nucleos:"8",threads:"12",base:"2.9GHz",boost:"4.7GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:52,id:"i7-10700F",nome:"Intel Core i7-10700F",nucleos:"8",threads:"12",base:"2.9GHz",boost:"4.7GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:55,id:"i7-10700K",nome:"Intel Core i7-10700K",nucleos:"8",threads:"12",base:"3.8GHz",boost:"5.1GHz",tdp:"125W",socket:"LGA1200",ano:"2020"}
,{score:55,id:"i7-10700KF",nome:"Intel Core i7-10700KF",nucleos:"8",threads:"12",base:"3.8GHz",boost:"5.1GHz",tdp:"125W",socket:"LGA1200",ano:"2020"}
,{score:48,id:"i7-10700T",nome:"Intel Core i7-10700T",nucleos:"8",threads:"12",base:"2.0GHz",boost:"4.5GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:59,id:"i9-10850K",nome:"Intel Core i9-10850K",nucleos:"10",threads:"20",base:"3.6GHz",boost:"5.2GHz",tdp:"125W",socket:"LGA1200",ano:"2020"}
,{score:58,id:"i9-10900",nome:"Intel Core i9-10900",nucleos:"10",threads:"20",base:"2.8GHz",boost:"5.3GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:58,id:"i9-10900F",nome:"Intel Core i9-10900F",nucleos:"10",threads:"20",base:"2.8GHz",boost:"5.3GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:60,id:"i9-10900K",nome:"Intel Core i9-10900K",nucleos:"10",threads:"20",base:"3.7GHz",boost:"5.3GHz",tdp:"125W",socket:"LGA1200",ano:"2020"}
,{score:60,id:"i9-10900KF",nome:"Intel Core i9-10900KF",nucleos:"10",threads:"20",base:"3.7GHz",boost:"5.3GHz",tdp:"125W",socket:"LGA1200",ano:"2020"}
,{score:55,id:"i9-10900T",nome:"Intel Core i9-10900T",nucleos:"10",threads:"20",base:"1.9GHz",boost:"5.1GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:57,id:"i9-10910",nome:"Intel Core i9-10910",nucleos:"10",threads:"20",base:"2.6GHz",boost:"5.1GHz",tdp:"65W",socket:"LGA1200",ano:"2020"}
,{score:27,id:"PentiumGoldG6400",nome:"Intel Pentium Gold G6400",nucleos:"2",threads:"4",base:"4.0GHz",boost:"4.0GHz",tdp:"54W",socket:"LGA1200",ano:"2020"}
,{score:25,id:"PentiumGoldG6400T",nome:"Intel Pentium Gold G6400T",nucleos:"2",threads:"4",base:"2.4GHz",boost:"2.4GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:27,id:"PentiumGoldG6500",nome:"Intel Pentium Gold G6500",nucleos:"2",threads:"4",base:"4.2GHz",boost:"4.2GHz",tdp:"54W",socket:"LGA1200",ano:"2020"}
,{score:25,id:"PentiumGoldG6500T",nome:"Intel Pentium Gold G6500T",nucleos:"2",threads:"4",base:"2.6GHz",boost:"2.6GHz",tdp:"35W",socket:"LGA1200",ano:"2020"}
,{score:28,id:"PentiumGoldG6600",nome:"Intel Pentium Gold G6600",nucleos:"2",threads:"4",base:"4.5GHz",boost:"4.5GHz",tdp:"54W",socket:"LGA1200",ano:"2020"}
,{score:24,id:"AMD3015e",nome:"AMD 3015e",nucleos:"4",threads:"4",base:"2.4GHz",boost:"3.3GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:25,id:"AMD3020e",nome:"AMD 3020e",nucleos:"4",threads:"4",base:"2.6GHz",boost:"3.3GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:24,id:"AthlonSilver3050C",nome:"AMD Athlon Silver 3050C",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.3GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:25,id:"AthlonGold3150C",nome:"AMD Athlon Gold 3150C",nucleos:"4",threads:"4",base:"2.4GHz",boost:"3.3GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:25,id:"AthlonGold3150U",nome:"AMD Athlon Gold 3150U",nucleos:"4",threads:"4",base:"2.4GHz",boost:"3.3GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:24,id:"AthlonSilver3050e",nome:"AMD Athlon Silver 3050e",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.3GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:24,id:"AthlonSilver3050U",nome:"AMD Athlon Silver 3050U",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.3GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:32,id:"Ryzen3-3250C",nome:"AMD Ryzen 3 3250C",nucleos:"4",threads:"4",base:"2.6GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:32,id:"Ryzen3-3250U",nome:"AMD Ryzen 3 3250U",nucleos:"4",threads:"4",base:"2.6GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:32,id:"Ryzen3-4300U",nome:"AMD Ryzen 3 4300U",nucleos:"4",threads:"4",base:"2.7GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:32,id:"Ryzen3PRO-4450U",nome:"AMD Ryzen 3 PRO 4450U",nucleos:"4",threads:"4",base:"2.7GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:38,id:"Ryzen5-3450U",nome:"AMD Ryzen 5 3450U",nucleos:"4",threads:"8",base:"2.4GHz",boost:"3.8GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:38,id:"Ryzen5-3500C",nome:"AMD Ryzen 5 3500C",nucleos:"6",threads:"6",base:"3.3GHz",boost:"3.8GHz",tdp:"35W",socket:"Mobile",ano:"2020"}
,{score:40,id:"Ryzen5-4500U",nome:"AMD Ryzen 5 4500U",nucleos:"6",threads:"6",base:"2.4GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:44,id:"Ryzen5-4600H",nome:"AMD Ryzen 5 4600H",nucleos:"6",threads:"12",base:"3.0GHz",boost:"4.0GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:42,id:"Ryzen5-4600U",nome:"AMD Ryzen 5 4600U",nucleos:"6",threads:"12",base:"2.1GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:42,id:"Ryzen5PRO-4650U",nome:"AMD Ryzen 5 PRO 4650U",nucleos:"6",threads:"12",base:"2.1GHz",boost:"4.0GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:42,id:"Ryzen7-3700C",nome:"AMD Ryzen 7 3700C",nucleos:"8",threads:"8",base:"3.0GHz",boost:"4.2GHz",tdp:"35W",socket:"Mobile",ano:"2020"}
,{score:44,id:"Ryzen7-4700U",nome:"AMD Ryzen 7 4700U",nucleos:"8",threads:"8",base:"2.0GHz",boost:"4.1GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:47,id:"Ryzen7-4800H",nome:"AMD Ryzen 7 4800H",nucleos:"8",threads:"16",base:"2.2GHz",boost:"4.2GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:48,id:"Ryzen7-4800HS",nome:"AMD Ryzen 7 4800HS",nucleos:"8",threads:"16",base:"2.5GHz",boost:"4.2GHz",tdp:"35W",socket:"Mobile",ano:"2020"}
,{score:46,id:"Ryzen7-4800U",nome:"AMD Ryzen 7 4800U",nucleos:"8",threads:"16",base:"1.8GHz",boost:"4.2GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:46,id:"Ryzen7PRO-4750U",nome:"AMD Ryzen 7 PRO 4750U",nucleos:"8",threads:"16",base:"1.8GHz",boost:"4.2GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:51,id:"Ryzen9-4900H",nome:"AMD Ryzen 9 4900H",nucleos:"8",threads:"16",base:"2.3GHz",boost:"4.3GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:52,id:"Ryzen9-4900HS",nome:"AMD Ryzen 9 4900HS",nucleos:"8",threads:"16",base:"2.6GHz",boost:"4.3GHz",tdp:"35W",socket:"Mobile",ano:"2020"}
,{score:20,id:"Celeron5305U",nome:"Intel Celeron 5305U",nucleos:"2",threads:"2",base:"1.9GHz",boost:"1.9GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:20,id:"Celeron6305",nome:"Intel Celeron 6305",nucleos:"2",threads:"2",base:"2.0GHz",boost:"2.0GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:30,id:"i3-1000NG4",nome:"Intel Core i3-1000NG4",nucleos:"2",threads:"4",base:"1.1GHz",boost:"3.4GHz",tdp:"9W",socket:"Mobile",ano:"2020"}
,{score:32,id:"i3-1110G4",nome:"Intel Core i3-1110G4",nucleos:"2",threads:"4",base:"3.0GHz",boost:"3.0GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:32,id:"i3-1115G4",nome:"Intel Core i3-1115G4",nucleos:"2",threads:"4",base:"3.0GHz",boost:"3.0GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:36,id:"i5-10200H",nome:"Intel Core i5-10200H",nucleos:"4",threads:"8",base:"2.0GHz",boost:"4.1GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:38,id:"i5-10300H",nome:"Intel Core i5-10300H",nucleos:"4",threads:"8",base:"2.5GHz",boost:"4.5GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:32,id:"i5-1030NG7",nome:"Intel Core i5-1030NG7",nucleos:"2",threads:"4",base:"1.1GHz",boost:"3.4GHz",tdp:"9W",socket:"Mobile",ano:"2020"}
,{score:38,id:"i5-10310U",nome:"Intel Core i5-10310U",nucleos:"4",threads:"8",base:"1.7GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:32,id:"i5-1038NG7",nome:"Intel Core i5-1038NG7",nucleos:"2",threads:"4",base:"1.1GHz",boost:"3.3GHz",tdp:"9W",socket:"Mobile",ano:"2020"}
,{score:40,id:"i5-10400H",nome:"Intel Core i5-10400H",nucleos:"4",threads:"8",base:"2.6GHz",boost:"4.6GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:42,id:"i5-10500H",nome:"Intel Core i5-10500H",nucleos:"6",threads:"12",base:"3.1GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:38,id:"i5-1130G7",nome:"Intel Core i5-1130G7",nucleos:"4",threads:"8",base:"1.5GHz",boost:"3.6GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:40,id:"i5-1135G7",nome:"Intel Core i5-1135G7",nucleos:"4",threads:"8",base:"2.4GHz",boost:"4.2GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:34,id:"i7-1060NG7",nome:"Intel Core i7-1060NG7",nucleos:"2",threads:"4",base:"1.1GHz",boost:"3.3GHz",tdp:"9W",socket:"Mobile",ano:"2020"}
,{score:40,id:"i7-10610U",nome:"Intel Core i7-10610U",nucleos:"4",threads:"8",base:"1.8GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:34,id:"i7-1068NG7",nome:"Intel Core i7-1068NG7",nucleos:"2",threads:"4",base:"1.1GHz",boost:"3.3GHz",tdp:"9W",socket:"Mobile",ano:"2020"}
,{score:46,id:"i7-10750H",nome:"Intel Core i7-10750H",nucleos:"6",threads:"12",base:"2.6GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:42,id:"i7-10810U",nome:"Intel Core i7-10810U",nucleos:"4",threads:"8",base:"1.1GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:48,id:"i7-10850H",nome:"Intel Core i7-10850H",nucleos:"6",threads:"12",base:"2.7GHz",boost:"5.1GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:47,id:"i7-10870H",nome:"Intel Core i7-10870H",nucleos:"6",threads:"12",base:"2.2GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:48,id:"i7-10875H",nome:"Intel Core i7-10875H",nucleos:"6",threads:"12",base:"2.3GHz",boost:"5.1GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:40,id:"i7-1160G7",nome:"Intel Core i7-1160G7",nucleos:"4",threads:"8",base:"1.2GHz",boost:"4.4GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:42,id:"i7-1165G7",nome:"Intel Core i7-1165G7",nucleos:"4",threads:"8",base:"2.8GHz",boost:"4.4GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:44,id:"i7-1185G7",nome:"Intel Core i7-1185G7",nucleos:"4",threads:"8",base:"3.8GHz",boost:"5.0GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:52,id:"i9-10885H",nome:"Intel Core i9-10885H",nucleos:"8",threads:"16",base:"2.4GHz",boost:"5.1GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:54,id:"i9-10980HK",nome:"Intel Core i9-10980HK",nucleos:"8",threads:"16",base:"2.6GHz",boost:"5.3GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:24,id:"Pentium6805",nome:"Intel Pentium 6805",nucleos:"2",threads:"4",base:"2.7GHz",boost:"2.7GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:24,id:"PentiumGold7505",nome:"Intel Pentium Gold 7505",nucleos:"2",threads:"4",base:"2.4GHz",boost:"2.4GHz",tdp:"15W",socket:"Mobile",ano:"2020"}
,{score:46,id:"XeonW-10855M",nome:"Intel Xeon W-10855M",nucleos:"6",threads:"12",base:"3.1GHz",boost:"4.3GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:50,id:"XeonW-10885M",nome:"Intel Xeon W-10885M",nucleos:"8",threads:"16",base:"3.0GHz",boost:"4.6GHz",tdp:"45W",socket:"Mobile",ano:"2020"}
,{score:85,id:"Threadripper3990X",nome:"AMD Ryzen Threadripper 3990X",nucleos:"64",threads:"128",base:"2.9GHz",boost:"4.5GHz",tdp:"280W",socket:"sTRX4",ano:"2020"}
,{score:70,id:"ThreadripperPRO3945WX",nome:"AMD Ryzen Threadripper PRO 3945WX",nucleos:"12",threads:"24",base:"3.0GHz",boost:"4.0GHz",tdp:"280W",socket:"sTRX4",ano:"2020"}
,{score:74,id:"ThreadripperPRO3955WX",nome:"AMD Ryzen Threadripper PRO 3955WX",nucleos:"16",threads:"32",base:"2.9GHz",boost:"4.2GHz",tdp:"280W",socket:"sTRX4",ano:"2020"}
,{score:75,id:"ThreadripperPRO3975WX",nome:"AMD Ryzen Threadripper PRO 3975WX",nucleos:"32",threads:"64",base:"2.7GHz",boost:"4.5GHz",tdp:"280W",socket:"sTRX4",ano:"2020"}
,{score:85,id:"ThreadripperPRO3995WX",nome:"AMD Ryzen Threadripper PRO 3995WX",nucleos:"64",threads:"128",base:"2.7GHz",boost:"4.5GHz",tdp:"280W",socket:"sTRX4",ano:"2020"}
,{score:46,id:"XeonW-1250",nome:"Intel Xeon W-1250",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.7GHz",tdp:"125W",socket:"LGA4189",ano:"2020"}
,{score:48,id:"XeonW-1250P",nome:"Intel Xeon W-1250P",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.7GHz",tdp:"125W",socket:"LGA4189",ano:"2020"}
,{score:54,id:"XeonW-1270",nome:"Intel Xeon W-1270",nucleos:"8",threads:"16",base:"3.0GHz",boost:"4.2GHz",tdp:"205W",socket:"LGA4189",ano:"2020"}
,{score:56,id:"XeonW-1270P",nome:"Intel Xeon W-1270P",nucleos:"8",threads:"16",base:"3.5GHz",boost:"4.2GHz",tdp:"205W",socket:"LGA4189",ano:"2020"}
,{score:60,id:"XeonW-1290",nome:"Intel Xeon W-1290",nucleos:"10",threads:"20",base:"2.5GHz",boost:"4.6GHz",tdp:"205W",socket:"LGA4189",ano:"2020"}
,{score:62,id:"XeonW-1290P",nome:"Intel Xeon W-1290P",nucleos:"10",threads:"20",base:"3.2GHz",boost:"4.6GHz",tdp:"205W",socket:"LGA4189",ano:"2020"}
,{score:56,id:"XeonW-1290T",nome:"Intel Xeon W-1290T",nucleos:"10",threads:"20",base:"2.0GHz",boost:"4.6GHz",tdp:"120W",socket:"LGA4189",ano:"2020"}
,{score:42,id:"AMDRyzen35300G",nome:"AMD Ryzen 3 5300G",nucleos:"4",threads:"8",base:"4.0GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:42,id:"AMDRyzen35300GE",nome:"AMD Ryzen 3 5300GE",nucleos:"4",threads:"8",base:"3.6GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:42,id:"AMDRyzen3PRO5350G",nome:"AMD Ryzen 3 PRO 5350G",nucleos:"4",threads:"8",base:"4.0GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:42,id:"AMDRyzen3PRO5350GE",nome:"AMD Ryzen 3 PRO 5350GE",nucleos:"4",threads:"8",base:"3.6GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:50,id:"AMDRyzen55600G",nome:"AMD Ryzen 5 5600G",nucleos:"6",threads:"12",base:"3.9GHz",boost:"4.4GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:50,id:"AMDRyzen55600GE",nome:"AMD Ryzen 5 5600GE",nucleos:"6",threads:"12",base:"3.4GHz",boost:"4.4GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:50,id:"AMDRyzen5PRO5650G",nome:"AMD Ryzen 5 PRO 5650G",nucleos:"6",threads:"12",base:"3.9GHz",boost:"4.4GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:50,id:"AMDRyzen5PRO5650GE",nome:"AMD Ryzen 5 PRO 5650GE",nucleos:"6",threads:"12",base:"3.4GHz",boost:"4.4GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:63,id:"AMDRyzen75700G",nome:"AMD Ryzen 7 5700G",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.6GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:63,id:"AMDRyzen75700GE",nome:"AMD Ryzen 7 5700GE",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.6GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:63,id:"AMDRyzen75800",nome:"AMD Ryzen 7 5800",nucleos:"8",threads:"16",base:"3.4GHz",boost:"4.6GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:63,id:"AMDRyzen7PRO5750G",nome:"AMD Ryzen 7 PRO 5750G",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.6GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:63,id:"AMDRyzen7PRO5750GE",nome:"AMD Ryzen 7 PRO 5750GE",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.6GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:72,id:"AMDRyzen95900",nome:"AMD Ryzen 9 5900",nucleos:"12",threads:"24",base:"3.0GHz",boost:"4.7GHz",tdp:"105W",socket:"AM4",ano:"2021"}
,{score:55,id:"AppleM1Max24coreGPU",nome:"Apple M1 Max (24-core GPU)",nucleos:"10",threads:"10",base:"0.6GHz",boost:"3.23GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:55,id:"AppleM1Max32coreGPU",nome:"Apple M1 Max (32-core GPU)",nucleos:"10",threads:"10",base:"0.6GHz",boost:"3.23GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:42,id:"IntelCorei310105",nome:"Intel Core i3-10105",nucleos:"4",threads:"8",base:"3.7GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:42,id:"IntelCorei310105F",nome:"Intel Core i3-10105F",nucleos:"4",threads:"8",base:"3.7GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:39,id:"IntelCorei310105T",nome:"Intel Core i3-10105T",nucleos:"4",threads:"8",base:"3.0GHz",boost:"3.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:46,id:"IntelCorei310305",nome:"Intel Core i3-10305",nucleos:"4",threads:"8",base:"3.8GHz",boost:"4.5GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:42,id:"IntelCorei310305T",nome:"Intel Core i3-10305T",nucleos:"4",threads:"8",base:"3.0GHz",boost:"4.0GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:46,id:"IntelCorei310325",nome:"Intel Core i3-10325",nucleos:"4",threads:"8",base:"3.9GHz",boost:"4.7GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:42,id:"IntelCorei311100B",nome:"Intel Core i3-11100B",nucleos:"4",threads:"8",base:"3.6GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:54,id:"IntelCorei510505",nome:"Intel Core i5-10505",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:50,id:"IntelCorei511400",nome:"Intel Core i5-11400",nucleos:"6",threads:"12",base:"2.6GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:50,id:"IntelCorei511400F",nome:"Intel Core i5-11400F",nucleos:"6",threads:"12",base:"2.6GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:47,id:"IntelCorei511400T",nome:"Intel Core i5-11400T",nucleos:"6",threads:"12",base:"1.3GHz",boost:"3.7GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:54,id:"IntelCorei511500",nome:"Intel Core i5-11500",nucleos:"6",threads:"12",base:"2.7GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:54,id:"IntelCorei511500B",nome:"Intel Core i5-11500B",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:47,id:"IntelCorei511500T",nome:"Intel Core i5-11500T",nucleos:"6",threads:"12",base:"1.5GHz",boost:"3.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:54,id:"IntelCorei511600",nome:"Intel Core i5-11600",nucleos:"6",threads:"12",base:"2.8GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:54,id:"IntelCorei511600K",nome:"Intel Core i5-11600K",nucleos:"6",threads:"12",base:"3.9GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:54,id:"IntelCorei511600KF",nome:"Intel Core i5-11600KF",nucleos:"6",threads:"12",base:"3.9GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:50,id:"IntelCorei511600T",nome:"Intel Core i5-11600T",nucleos:"6",threads:"12",base:"1.7GHz",boost:"4.1GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:66,id:"IntelCorei512600K",nome:"Intel Core i5-12600K",nucleos:"10",threads:"16",base:"3.7GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:66,id:"IntelCorei512600KF",nome:"Intel Core i5-12600KF",nucleos:"10",threads:"16",base:"3.7GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:63,id:"IntelCorei711700",nome:"Intel Core i7-11700",nucleos:"8",threads:"16",base:"2.5GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:63,id:"IntelCorei711700B",nome:"Intel Core i7-11700B",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:63,id:"IntelCorei711700F",nome:"Intel Core i7-11700F",nucleos:"8",threads:"16",base:"2.5GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:66,id:"IntelCorei711700K",nome:"Intel Core i7-11700K",nucleos:"8",threads:"16",base:"3.6GHz",boost:"5.0GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:66,id:"IntelCorei711700KF",nome:"Intel Core i7-11700KF",nucleos:"8",threads:"16",base:"3.6GHz",boost:"5.0GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:63,id:"IntelCorei711700T",nome:"Intel Core i7-11700T",nucleos:"8",threads:"16",base:"1.4GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:72,id:"IntelCorei712700K",nome:"Intel Core i7-12700K",nucleos:"12",threads:"20",base:"3.6GHz",boost:"5.0GHz",tdp:"105W",socket:"LGA1200",ano:"2021"}
,{score:72,id:"IntelCorei712700KF",nome:"Intel Core i7-12700KF",nucleos:"12",threads:"20",base:"3.6GHz",boost:"5.0GHz",tdp:"105W",socket:"LGA1200",ano:"2021"}
,{score:69,id:"IntelCorei911900",nome:"Intel Core i9-11900",nucleos:"8",threads:"16",base:"2.5GHz",boost:"5.2GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:69,id:"IntelCorei911900F",nome:"Intel Core i9-11900F",nucleos:"8",threads:"16",base:"2.5GHz",boost:"5.2GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:69,id:"IntelCorei911900K",nome:"Intel Core i9-11900K",nucleos:"8",threads:"16",base:"3.5GHz",boost:"5.3GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:66,id:"IntelCorei911900KB",nome:"Intel Core i9-11900KB",nucleos:"8",threads:"16",base:"3.3GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:69,id:"IntelCorei911900KF",nome:"Intel Core i9-11900KF",nucleos:"8",threads:"16",base:"3.5GHz",boost:"5.3GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:66,id:"IntelCorei911900T",nome:"Intel Core i9-11900T",nucleos:"8",threads:"16",base:"1.5GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1200",ano:"2021"}
,{score:75,id:"IntelCorei912900K",nome:"Intel Core i9-12900K",nucleos:"16",threads:"24",base:"3.2GHz",boost:"5.2GHz",tdp:"105W",socket:"LGA1200",ano:"2021"}
,{score:75,id:"IntelCorei912900KF",nome:"Intel Core i9-12900KF",nucleos:"16",threads:"24",base:"3.2GHz",boost:"5.2GHz",tdp:"105W",socket:"LGA1200",ano:"2021"}
,{score:26,id:"AMD3015Ce",nome:"AMD 3015Ce",nucleos:"2",threads:"4",base:"1.2GHz",boost:"2.3GHz",tdp:"15W",socket:"Mobile",ano:"2021"}
,{score:26,id:"AMDAthlonPRO3045B",nome:"AMD Athlon PRO 3045B",nucleos:"2",threads:"2",base:"2.3GHz",boost:"3.2GHz",tdp:"15W",socket:"AM4",ano:"2021"}
,{score:26,id:"AMDAthlonPRO3145B",nome:"AMD Athlon PRO 3145B",nucleos:"2",threads:"4",base:"2.4GHz",boost:"3.3GHz",tdp:"15W",socket:"AM4",ano:"2021"}
,{score:34,id:"AMDRyzen35300U",nome:"AMD Ryzen 3 5300U",nucleos:"4",threads:"8",base:"2.6GHz",boost:"3.8GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:37,id:"AMDRyzen35400U",nome:"AMD Ryzen 3 5400U",nucleos:"4",threads:"8",base:"2.6GHz",boost:"4.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:37,id:"AMDRyzen3PRO5450U",nome:"AMD Ryzen 3 PRO 5450U",nucleos:"4",threads:"8",base:"2.6GHz",boost:"4.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:45,id:"AMDRyzen54680U",nome:"AMD Ryzen 5 4680U",nucleos:"6",threads:"12",base:"2.2GHz",boost:"4.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:45,id:"AMDRyzen55500U",nome:"AMD Ryzen 5 5500U",nucleos:"6",threads:"12",base:"2.1GHz",boost:"4.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:45,id:"AMDRyzen55560U",nome:"AMD Ryzen 5 5560U",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:45,id:"AMDRyzen55600H",nome:"AMD Ryzen 5 5600H",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.2GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:45,id:"AMDRyzen55600HS",nome:"AMD Ryzen 5 5600HS",nucleos:"6",threads:"12",base:"3.0GHz",boost:"4.2GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:45,id:"AMDRyzen55600U",nome:"AMD Ryzen 5 5600U",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.2GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:45,id:"AMDRyzen5PRO5650U",nome:"AMD Ryzen 5 PRO 5650U",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.2GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:54,id:"AMDRyzen74980U",nome:"AMD Ryzen 7 4980U",nucleos:"8",threads:"16",base:"2.0GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:54,id:"AMDRyzen75700U",nome:"AMD Ryzen 7 5700U",nucleos:"8",threads:"16",base:"1.8GHz",boost:"4.3GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:54,id:"AMDRyzen75800H",nome:"AMD Ryzen 7 5800H",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:54,id:"AMDRyzen75800HS",nome:"AMD Ryzen 7 5800HS",nucleos:"8",threads:"16",base:"2.8GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:54,id:"AMDRyzen75800U",nome:"AMD Ryzen 7 5800U",nucleos:"8",threads:"16",base:"1.9GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:54,id:"AMDRyzen7PRO5850U",nome:"AMD Ryzen 7 PRO 5850U",nucleos:"8",threads:"16",base:"1.9GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:61,id:"AMDRyzen95900HS",nome:"AMD Ryzen 9 5900HS",nucleos:"8",threads:"16",base:"3.0GHz",boost:"4.6GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:66,id:"AMDRyzen95900HX",nome:"AMD Ryzen 9 5900HX",nucleos:"8",threads:"16",base:"3.3GHz",boost:"4.6GHz",tdp:"65W",socket:"AM4",ano:"2021"}
,{score:61,id:"AMDRyzen95980HS",nome:"AMD Ryzen 9 5980HS",nucleos:"8",threads:"16",base:"3.0GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:66,id:"AMDRyzen95980HX",nome:"AMD Ryzen 9 5980HX",nucleos:"8",threads:"16",base:"3.3GHz",boost:"4.8GHz",tdp:"65W",socket:"AM4",ano:"2021"}


,{score:50,id:"AppleM1Pro10coreCPU14coreGPU",nome:"Apple M1 Pro (10-core CPU 14-core GPU)",nucleos:"10",threads:"10",base:"0.6GHz",boost:"3.23GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:50,id:"AppleM1Pro16coreGPU",nome:"Apple M1 Pro (16-core GPU)",nucleos:"10",threads:"10",base:"0.6GHz",boost:"3.23GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:44,id:"AppleM1Pro8coreCPU14GPU",nome:"Apple M1 Pro (8-core CPU 14-GPU)",nucleos:"8",threads:"8",base:"0.6GHz",boost:"3.23GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:28,id:"IntelCorei310100Y",nome:"Intel Core i3-10100Y",nucleos:"2",threads:"4",base:"1.3GHz",boost:"3.9GHz",tdp:"15W",socket:"Mobile",ano:"2021"}
,{score:34,id:"IntelCorei31120G4",nome:"Intel Core i3-1120G4",nucleos:"4",threads:"8",base:"1.5GHz",boost:"3.5GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:34,id:"IntelCorei31125G4",nome:"Intel Core i3-1125G4",nucleos:"4",threads:"8",base:"2.0GHz",boost:"3.7GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:45,id:"IntelCorei511260H",nome:"Intel Core i5-11260H",nucleos:"6",threads:"12",base:"2.6GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:39,id:"IntelCorei511300H",nome:"Intel Core i5-11300H",nucleos:"4",threads:"8",base:"3.1GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:43,id:"IntelCorei511320H",nome:"Intel Core i5-11320H",nucleos:"4",threads:"8",base:"3.2GHz",boost:"4.5GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:49,id:"IntelCorei511400H",nome:"Intel Core i5-11400H",nucleos:"6",threads:"12",base:"2.7GHz",boost:"4.5GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:39,id:"IntelCorei51140G7",nome:"Intel Core i5-1140G7",nucleos:"4",threads:"8",base:"1.8GHz",boost:"4.2GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:39,id:"IntelCorei51145G7",nome:"Intel Core i5-1145G7",nucleos:"4",threads:"8",base:"2.6GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:49,id:"IntelCorei511500H",nome:"Intel Core i5-11500H",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.6GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:43,id:"IntelCorei51155G7",nome:"Intel Core i5-1155G7",nucleos:"4",threads:"8",base:"2.5GHz",boost:"4.5GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:46,id:"IntelCorei711370H",nome:"Intel Core i7-11370H",nucleos:"4",threads:"8",base:"3.3GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:49,id:"IntelCorei711375H",nome:"Intel Core i7-11375H",nucleos:"4",threads:"8",base:"3.3GHz",boost:"5.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:49,id:"IntelCorei711390H",nome:"Intel Core i7-11390H",nucleos:"4",threads:"8",base:"3.4GHz",boost:"5.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:52,id:"IntelCorei711600H",nome:"Intel Core i7-11600H",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.6GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:58,id:"IntelCorei711800H",nome:"Intel Core i7-11800H",nucleos:"8",threads:"16",base:"2.3GHz",boost:"4.6GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:46,id:"IntelCorei71180G7",nome:"Intel Core i7-1180G7",nucleos:"4",threads:"8",base:"2.2GHz",boost:"4.6GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:58,id:"IntelCorei711850H",nome:"Intel Core i7-11850H",nucleos:"8",threads:"16",base:"2.5GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:49,id:"IntelCorei71195G7",nome:"Intel Core i7-1195G7",nucleos:"4",threads:"8",base:"2.9GHz",boost:"5.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:61,id:"IntelCorei911900H",nome:"Intel Core i9-11900H",nucleos:"8",threads:"16",base:"2.5GHz",boost:"4.9GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:64,id:"IntelCorei911950H",nome:"Intel Core i9-11950H",nucleos:"8",threads:"16",base:"2.6GHz",boost:"5.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:69,id:"IntelCorei911980HK",nome:"Intel Core i9-11980HK",nucleos:"8",threads:"16",base:"3.3GHz",boost:"5.0GHz",tdp:"65W",socket:"Mobile",ano:"2021"}
,{score:21,id:"IntelPentiumGold6500Y",nome:"Intel Pentium Gold 6500Y",nucleos:"2",threads:"4",base:"1.1GHz",boost:"3.4GHz",tdp:"15W",socket:"Mobile",ano:"2021"}
,{score:58,id:"IntelXeonW11855M",nome:"Intel Xeon W-11855M",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.9GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:67,id:"IntelXeonW11955M",nome:"Intel Xeon W-11955M",nucleos:"8",threads:"16",base:"2.6GHz",boost:"5.0GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:61,id:"IntelXeonW1350",nome:"Intel Xeon W-1350",nucleos:"6",threads:"12",base:"3.3GHz",boost:"5.0GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:61,id:"IntelXeonW1350P",nome:"Intel Xeon W-1350P",nucleos:"6",threads:"12",base:"4.0GHz",boost:"5.1GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:67,id:"IntelXeonW1370",nome:"Intel Xeon W-1370",nucleos:"8",threads:"16",base:"2.9GHz",boost:"5.1GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:67,id:"IntelXeonW1370P",nome:"Intel Xeon W-1370P",nucleos:"8",threads:"16",base:"3.6GHz",boost:"5.2GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:67,id:"IntelXeonW1390",nome:"Intel Xeon W-1390",nucleos:"8",threads:"16",base:"2.8GHz",boost:"5.2GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:67,id:"IntelXeonW1390P",nome:"Intel Xeon W-1390P",nucleos:"8",threads:"16",base:"3.5GHz",boost:"5.3GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:64,id:"IntelXeonW1390T",nome:"Intel Xeon W-1390T",nucleos:"8",threads:"16",base:"1.5GHz",boost:"4.9GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:63,id:"IntelXeonW3323",nome:"Intel Xeon W-3323",nucleos:"12",threads:"24",base:"3.5GHz",boost:"3.9GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:66,id:"IntelXeonW3335",nome:"Intel Xeon W-3335",nucleos:"16",threads:"32",base:"3.4GHz",boost:"4.0GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:66,id:"IntelXeonW3345",nome:"Intel Xeon W-3345",nucleos:"24",threads:"48",base:"3.0GHz",boost:"4.0GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:66,id:"IntelXeonW3365",nome:"Intel Xeon W-3365",nucleos:"32",threads:"64",base:"2.7GHz",boost:"4.0GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:66,id:"IntelXeonW3375",nome:"Intel Xeon W-3375",nucleos:"38",threads:"76",base:"2.5GHz",boost:"4.0GHz",tdp:"125W",socket:"LGA4189",ano:"2021"}
,{score:30,id:"AMDRyzen34100",nome:"AMD Ryzen 3 4100",nucleos:"4",threads:"8",base:"3.8GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:30,id:"AMDRyzen3PRO4355G",nome:"AMD Ryzen 3 PRO 4355G",nucleos:"4",threads:"8",base:"3.8GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:30,id:"AMDRyzen3PRO4355GE",nome:"AMD Ryzen 3 PRO 4355GE",nucleos:"4",threads:"8",base:"3.5GHz",boost:"4.0GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:48,id:"AMDRyzen54500",nome:"AMD Ryzen 5 4500",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.1GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:48,id:"AMDRyzen55500",nome:"AMD Ryzen 5 5500",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:48,id:"AMDRyzen55600",nome:"AMD Ryzen 5 5600",nucleos:"6",threads:"12",base:"3.5GHz",boost:"4.4GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:48,id:"AMDRyzen57600X",nome:"AMD Ryzen 5 7600X",nucleos:"6",threads:"12",base:"4.7GHz",boost:"5.3GHz",tdp:"65W",socket:"AM5",ano:"2022"}
,{score:48,id:"AMDRyzen5PRO4655G",nome:"AMD Ryzen 5 PRO 4655G",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:48,id:"AMDRyzen5PRO4655GE",nome:"AMD Ryzen 5 PRO 4655GE",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.2GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:48,id:"AMDRyzen5PRO5645",nome:"AMD Ryzen 5 PRO 5645",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.6GHz",tdp:"65W",socket:"AM4",ano:"2022"}
,{score:58,id:"AMDRyzen75700",nome:"AMD Ryzen 7 5700",nucleos:"8",threads:"16",base:"3.7GHz",boost:"4.6GHz",tdp:"105W",socket:"AM4",ano:"2022"}
,{score:58,id:"AMDRyzen75700X",nome:"AMD Ryzen 7 5700X",nucleos:"8",threads:"16",base:"3.4GHz",boost:"4.6GHz",tdp:"105W",socket:"AM4",ano:"2022"}
,{score:58,id:"AMDRyzen75800X3D",nome:"AMD Ryzen 7 5800X3D",nucleos:"8",threads:"16",base:"3.4GHz",boost:"4.5GHz",tdp:"105W",socket:"AM4",ano:"2022"}
,{score:58,id:"AMDRyzen77700X",nome:"AMD Ryzen 7 7700X",nucleos:"8",threads:"16",base:"4.5GHz",boost:"5.4GHz",tdp:"65W",socket:"AM5",ano:"2022"}
,{score:58,id:"AMDRyzen7PRO5845",nome:"AMD Ryzen 7 PRO 5845",nucleos:"8",threads:"16",base:"3.4GHz",boost:"4.6GHz",tdp:"105W",socket:"AM4",ano:"2022"}
,{score:72,id:"AMDRyzen97900X",nome:"AMD Ryzen 9 7900X",nucleos:"12",threads:"24",base:"4.7GHz",boost:"5.6GHz",tdp:"170W",socket:"AM5",ano:"2022"}
,{score:83,id:"AMDRyzen97950X",nome:"AMD Ryzen 9 7950X",nucleos:"16",threads:"32",base:"4.5GHz",boost:"5.7GHz",tdp:"200W",socket:"AM5",ano:"2022"}
,{score:72,id:"AMDRyzen9PRO5945",nome:"AMD Ryzen 9 PRO 5945",nucleos:"12",threads:"24",base:"3.0GHz",boost:"4.7GHz",tdp:"105W",socket:"AM4",ano:"2022"}
,{score:75,id:"AppleM1Ultra48coreGPU",nome:"Apple M1 Ultra (48-core GPU)",nucleos:"20",threads:"20",base:"0.6GHz",boost:"3.23GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:75,id:"AppleM1Ultra64coreGPU",nome:"Apple M1 Ultra (64-core GPU)",nucleos:"20",threads:"20",base:"0.6GHz",boost:"3.23GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:70,id:"AppleM210coreGPU",nome:"Apple M2 (10-core GPU)",nucleos:"8",threads:"8",base:"0.66GHz",boost:"3.5GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:20,id:"IntelCeleronG6900",nome:"Intel Celeron G6900",nucleos:"2",threads:"2",base:"3.4GHz",boost:"3.4GHz",tdp:"46W",socket:"LGA1700",ano:"2022"}
,{score:20,id:"IntelCeleronG6900T",nome:"Intel Celeron G6900T",nucleos:"2",threads:"2",base:"2.8GHz",boost:"2.8GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:35,id:"IntelCorei312100",nome:"Intel Core i3-12100",nucleos:"4",threads:"8",base:"3.3GHz",boost:"4.3GHz",tdp:"60W",socket:"LGA1700",ano:"2022"}
,{score:35,id:"IntelCorei312100F",nome:"Intel Core i3-12100F",nucleos:"4",threads:"8",base:"3.3GHz",boost:"4.3GHz",tdp:"60W",socket:"LGA1700",ano:"2022"}
,{score:35,id:"IntelCorei312100T",nome:"Intel Core i3-12100T",nucleos:"4",threads:"8",base:"2.2GHz",boost:"4.1GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:35,id:"IntelCorei312300",nome:"Intel Core i3-12300",nucleos:"4",threads:"8",base:"3.5GHz",boost:"4.4GHz",tdp:"60W",socket:"LGA1700",ano:"2022"}
,{score:35,id:"IntelCorei312300T",nome:"Intel Core i3-12300T",nucleos:"4",threads:"8",base:"2.3GHz",boost:"4.2GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:48,id:"IntelCorei512400",nome:"Intel Core i5-12400",nucleos:"6",threads:"12",base:"2.5GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1700",ano:"2022"}
,{score:48,id:"IntelCorei512400F",nome:"Intel Core i5-12400F",nucleos:"6",threads:"12",base:"2.5GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1700",ano:"2022"}
,{score:48,id:"IntelCorei512400T",nome:"Intel Core i5-12400T",nucleos:"6",threads:"12",base:"1.8GHz",boost:"4.2GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:48,id:"IntelCorei512500",nome:"Intel Core i5-12500",nucleos:"6",threads:"12",base:"3.0GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1700",ano:"2022"}
,{score:48,id:"IntelCorei512500T",nome:"Intel Core i5-12500T",nucleos:"6",threads:"12",base:"2.0GHz",boost:"4.4GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:48,id:"IntelCorei512600",nome:"Intel Core i5-12600",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1700",ano:"2022"}
,{score:48,id:"IntelCorei512600T",nome:"Intel Core i5-12600T",nucleos:"6",threads:"12",base:"2.1GHz",boost:"4.6GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:62,id:"IntelCorei513600K",nome:"Intel Core i5-13600K",nucleos:"14",threads:"20",base:"3.5GHz",boost:"5.1GHz",tdp:"125W",socket:"LGA1700",ano:"2022"}
,{score:62,id:"IntelCorei513600KF",nome:"Intel Core i5-13600KF",nucleos:"14",threads:"20",base:"3.5GHz",boost:"5.1GHz",tdp:"125W",socket:"LGA1700",ano:"2022"}
,{score:62,id:"IntelCorei712700",nome:"Intel Core i7-12700",nucleos:"12",threads:"20",base:"2.1GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1700",ano:"2022"}
,{score:62,id:"IntelCorei712700F",nome:"Intel Core i7-12700F",nucleos:"12",threads:"20",base:"2.1GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1700",ano:"2022"}
,{score:62,id:"IntelCorei712700T",nome:"Intel Core i7-12700T",nucleos:"12",threads:"20",base:"1.4GHz",boost:"4.7GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:70,id:"IntelCorei713700K",nome:"Intel Core i7-13700K",nucleos:"16",threads:"24",base:"3.4GHz",boost:"5.4GHz",tdp:"125W",socket:"LGA1700",ano:"2022"}
,{score:70,id:"IntelCorei713700KF",nome:"Intel Core i7-13700KF",nucleos:"16",threads:"24",base:"3.4GHz",boost:"5.4GHz",tdp:"125W",socket:"LGA1700",ano:"2022"}
,{score:78,id:"IntelCorei912900",nome:"Intel Core i9-12900",nucleos:"16",threads:"24",base:"2.4GHz",boost:"5.1GHz",tdp:"65W",socket:"LGA1700",ano:"2022"}
,{score:78,id:"IntelCorei912900F",nome:"Intel Core i9-12900F",nucleos:"16",threads:"24",base:"2.4GHz",boost:"5.1GHz",tdp:"65W",socket:"LGA1700",ano:"2022"}
,{score:78,id:"IntelCorei912900KS",nome:"Intel Core i9-12900KS",nucleos:"16",threads:"24",base:"3.4GHz",boost:"5.5GHz",tdp:"150W",socket:"LGA1700",ano:"2022"}
,{score:78,id:"IntelCorei912900T",nome:"Intel Core i9-12900T",nucleos:"16",threads:"24",base:"1.4GHz",boost:"4.9GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:82,id:"IntelCorei913900K",nome:"Intel Core i9-13900K",nucleos:"24",threads:"32",base:"3.0GHz",boost:"5.8GHz",tdp:"125W",socket:"LGA1700",ano:"2022"}
,{score:82,id:"IntelCorei913900KF",nome:"Intel Core i9-13900KF",nucleos:"24",threads:"32",base:"3.0GHz",boost:"5.8GHz",tdp:"125W",socket:"LGA1700",ano:"2022"}
,{score:22,id:"IntelPentiumGoldG7400",nome:"Intel Pentium Gold G7400",nucleos:"2",threads:"4",base:"3.7GHz",boost:"3.7GHz",tdp:"54W",socket:"LGA1700",ano:"2022"}
,{score:22,id:"IntelPentiumGoldG7400T",nome:"Intel Pentium Gold G7400T",nucleos:"2",threads:"4",base:"3.1GHz",boost:"3.1GHz",tdp:"35W",socket:"LGA1700",ano:"2022"}
,{score:22,id:"AMDAthlonGold7220U",nome:"AMD Athlon Gold 7220U",nucleos:"2",threads:"4",base:"2.4GHz",boost:"3.7GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:22,id:"AMDAthlonSilver7120U",nome:"AMD Athlon Silver 7120U",nucleos:"2",threads:"2",base:"2.4GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:25,id:"AMDRyzen35125C",nome:"AMD Ryzen 3 5125C",nucleos:"2",threads:"4",base:"3.0GHz",boost:"3.0GHz",tdp:"28W",socket:"Mobile",ano:"2022"}
,{score:30,id:"AMDRyzen35425C",nome:"AMD Ryzen 3 5425C",nucleos:"4",threads:"8",base:"2.7GHz",boost:"4.1GHz",tdp:"28W",socket:"Mobile",ano:"2022"}
,{score:30,id:"AMDRyzen35425U",nome:"AMD Ryzen 3 5425U",nucleos:"4",threads:"8",base:"2.7GHz",boost:"4.1GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:30,id:"AMDRyzen37320U",nome:"AMD Ryzen 3 7320U",nucleos:"4",threads:"8",base:"2.4GHz",boost:"4.1GHz",tdp:"15W",socket:"AM5",ano:"2022"}
,{score:30,id:"AMDRyzen3PRO5475U",nome:"AMD Ryzen 3 PRO 5475U",nucleos:"4",threads:"8",base:"2.7GHz",boost:"4.1GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:48,id:"AMDRyzen55625C",nome:"AMD Ryzen 5 5625C",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.3GHz",tdp:"28W",socket:"Mobile",ano:"2022"}
,{score:48,id:"AMDRyzen55625U",nome:"AMD Ryzen 5 5625U",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.3GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:48,id:"AMDRyzen56600H",nome:"AMD Ryzen 5 6600H",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.5GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:48,id:"AMDRyzen56600HS",nome:"AMD Ryzen 5 6600HS",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.5GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:48,id:"AMDRyzen56600U",nome:"AMD Ryzen 5 6600U",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:38,id:"AMDRyzen57520U",nome:"AMD Ryzen 5 7520U",nucleos:"4",threads:"8",base:"2.8GHz",boost:"4.3GHz",tdp:"15W",socket:"AM5",ano:"2022"}
,{score:48,id:"AMDRyzen5PRO5675U",nome:"AMD Ryzen 5 PRO 5675U",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.3GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:48,id:"AMDRyzen5PRO6650H",nome:"AMD Ryzen 5 PRO 6650H",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.5GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:48,id:"AMDRyzen5PRO6650HS",nome:"AMD Ryzen 5 PRO 6650HS",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.5GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:48,id:"AMDRyzen5PRO6650U",nome:"AMD Ryzen 5 PRO 6650U",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen75825C",nome:"AMD Ryzen 7 5825C",nucleos:"8",threads:"16",base:"2.0GHz",boost:"4.5GHz",tdp:"28W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen75825U",nome:"AMD Ryzen 7 5825U",nucleos:"8",threads:"16",base:"2.0GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen76800H",nome:"AMD Ryzen 7 6800H",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.7GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen76800HS",nome:"AMD Ryzen 7 6800HS",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.7GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen76800U",nome:"AMD Ryzen 7 6800U",nucleos:"8",threads:"16",base:"2.7GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen7PRO5875U",nome:"AMD Ryzen 7 PRO 5875U",nucleos:"8",threads:"16",base:"2.0GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen7PRO6850H",nome:"AMD Ryzen 7 PRO 6850H",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.7GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen7PRO6850HS",nome:"AMD Ryzen 7 PRO 6850HS",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.7GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen7PRO6850U",nome:"AMD Ryzen 7 PRO 6850U",nucleos:"8",threads:"16",base:"2.7GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2022"}
,{score:58,id:"AMDRyzen7PRO6860Z",nome:"AMD Ryzen 7 PRO 6860Z",nucleos:"8",threads:"16",base:"2.7GHz",boost:"4.75GHz",tdp:"28W",socket:"Mobile",ano:"2022"}
,{score:62,id:"AMDRyzen96900HS",nome:"AMD Ryzen 9 6900HS",nucleos:"8",threads:"16",base:"3.3GHz",boost:"4.9GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:62,id:"AMDRyzen96900HX",nome:"AMD Ryzen 9 6900HX",nucleos:"8",threads:"16",base:"3.3GHz",boost:"4.9GHz",tdp:"55W",socket:"Mobile",ano:"2022"}
,{score:62,id:"AMDRyzen96980HS",nome:"AMD Ryzen 9 6980HS",nucleos:"8",threads:"16",base:"3.3GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:62,id:"AMDRyzen96980HX",nome:"AMD Ryzen 9 6980HX",nucleos:"8",threads:"16",base:"3.3GHz",boost:"5.0GHz",tdp:"55W",socket:"Mobile",ano:"2022"}
,{score:62,id:"AMDRyzen9PRO6950H",nome:"AMD Ryzen 9 PRO 6950H",nucleos:"8",threads:"16",base:"3.3GHz",boost:"4.9GHz",tdp:"45W",socket:"Mobile",ano:"2022"}
,{score:62,id:"AMDRyzen9PRO6950HS",nome:"AMD Ryzen 9 PRO 6950HS",nucleos:"8",threads:"16",base:"3.3GHz",boost:"4.9GHz",tdp:"45W",socket:"Mobile",ano:"2022"}

,{score:70,id:"AppleM28coreGPU",nome:"Apple M2 (8-core GPU)",nucleos:"8",threads:"8",base:"0.66GHz",boost:"3.5GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:20,id:"IntelCeleron7300",nome:"Intel Celeron 7300",nucleos:"5",threads:"5",base:"1.0GHz",boost:"1.0GHz",tdp:"46W",socket:"LGA1700",ano:"2022"}
,{score:20,id:"IntelCeleron7305",nome:"Intel Celeron 7305",nucleos:"5",threads:"5",base:"1.1GHz",boost:"1.1GHz",tdp:"46W",socket:"LGA1700",ano:"2022"}
,{score:35,id:"IntelCorei31210U",nome:"Intel Core i3-1210U",nucleos:"6",threads:"8",base:"1.0GHz",boost:"4.4GHz",tdp:"60W",socket:"Mobile",ano:"2022"}
,{score:35,id:"IntelCorei31215U",nome:"Intel Core i3-1215U",nucleos:"6",threads:"8",base:"1.2GHz",boost:"4.4GHz",tdp:"60W",socket:"Mobile",ano:"2022"}
,{score:40,id:"IntelCorei31220P",nome:"Intel Core i3-1220P",nucleos:"10",threads:"12",base:"1.5GHz",boost:"4.4GHz",tdp:"60W",socket:"Mobile",ano:"2022"}
,{score:52,id:"IntelCorei51230U",nome:"Intel Core i5-1230U",nucleos:"10",threads:"12",base:"1.0GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:52,id:"IntelCorei51235U",nome:"Intel Core i5-1235U",nucleos:"10",threads:"12",base:"1.3GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:55,id:"IntelCorei51240P",nome:"Intel Core i5-1240P",nucleos:"12",threads:"16",base:"1.7GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:52,id:"IntelCorei51240U",nome:"Intel Core i5-1240U",nucleos:"10",threads:"12",base:"1.1GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:48,id:"IntelCorei512450H",nome:"Intel Core i5-12450H",nucleos:"8",threads:"12",base:"2.0GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:48,id:"IntelCorei512450HX",nome:"Intel Core i5-12450HX",nucleos:"8",threads:"12",base:"2.4GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:52,id:"IntelCorei51245U",nome:"Intel Core i5-1245U",nucleos:"10",threads:"12",base:"1.6GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:55,id:"IntelCorei512500H",nome:"Intel Core i5-12500H",nucleos:"12",threads:"16",base:"2.5GHz",boost:"4.5GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:55,id:"IntelCorei51250P",nome:"Intel Core i5-1250P",nucleos:"12",threads:"16",base:"1.7GHz",boost:"4.4GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:55,id:"IntelCorei512600H",nome:"Intel Core i5-12600H",nucleos:"12",threads:"16",base:"2.7GHz",boost:"4.5GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:55,id:"IntelCorei512600HX",nome:"Intel Core i5-12600HX",nucleos:"12",threads:"16",base:"2.5GHz",boost:"4.6GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:58,id:"IntelCorei71250U",nome:"Intel Core i7-1250U",nucleos:"10",threads:"12",base:"1.1GHz",boost:"4.7GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:58,id:"IntelCorei71255U",nome:"Intel Core i7-1255U",nucleos:"10",threads:"12",base:"1.7GHz",boost:"4.7GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:62,id:"IntelCorei71260P",nome:"Intel Core i7-1260P",nucleos:"12",threads:"16",base:"2.1GHz",boost:"4.7GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:58,id:"IntelCorei71260U",nome:"Intel Core i7-1260U",nucleos:"10",threads:"12",base:"1.1GHz",boost:"4.7GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:58,id:"IntelCorei712650H",nome:"Intel Core i7-12650H",nucleos:"10",threads:"16",base:"2.3GHz",boost:"4.7GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:65,id:"IntelCorei712650HX",nome:"Intel Core i7-12650HX",nucleos:"14",threads:"20",base:"2.0GHz",boost:"4.7GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:58,id:"IntelCorei71265U",nome:"Intel Core i7-1265U",nucleos:"10",threads:"12",base:"1.8GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:65,id:"IntelCorei712700H",nome:"Intel Core i7-12700H",nucleos:"14",threads:"20",base:"2.3GHz",boost:"4.7GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:62,id:"IntelCorei71270P",nome:"Intel Core i7-1270P",nucleos:"12",threads:"16",base:"2.2GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:65,id:"IntelCorei712800H",nome:"Intel Core i7-12800H",nucleos:"14",threads:"20",base:"2.4GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:70,id:"IntelCorei712800HX",nome:"Intel Core i7-12800HX",nucleos:"16",threads:"24",base:"2.0GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:65,id:"IntelCorei71280P",nome:"Intel Core i7-1280P",nucleos:"14",threads:"20",base:"1.8GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:70,id:"IntelCorei712850HX",nome:"Intel Core i7-12850HX",nucleos:"16",threads:"24",base:"2.1GHz",boost:"4.8GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:72,id:"IntelCorei912900H",nome:"Intel Core i9-12900H",nucleos:"14",threads:"20",base:"2.5GHz",boost:"5.0GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:72,id:"IntelCorei912900HK",nome:"Intel Core i9-12900HK",nucleos:"14",threads:"20",base:"2.5GHz",boost:"5.0GHz",tdp:"125W",socket:"Mobile",ano:"2022"}
,{score:78,id:"IntelCorei912900HX",nome:"Intel Core i9-12900HX",nucleos:"16",threads:"24",base:"2.3GHz",boost:"5.0GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:78,id:"IntelCorei912950HX",nome:"Intel Core i9-12950HX",nucleos:"16",threads:"24",base:"2.3GHz",boost:"5.0GHz",tdp:"65W",socket:"Mobile",ano:"2022"}
,{score:22,id:"IntelPentiumGold8500",nome:"Intel Pentium Gold 8500",nucleos:"5",threads:"6",base:"1.0GHz",boost:"4.4GHz",tdp:"54W",socket:"LGA1700",ano:"2022"}
,{score:22,id:"IntelPentiumGold8505",nome:"Intel Pentium Gold 8505",nucleos:"5",threads:"6",base:"1.2GHz",boost:"4.4GHz",tdp:"54W",socket:"LGA1700",ano:"2022"}
,{score:75,id:"AMDRyzenThreadripperPRO5945WX",nome:"AMD Ryzen Threadripper PRO 5945WX",nucleos:"12",threads:"24",base:"4.1GHz",boost:"4.5GHz",tdp:"280W",socket:"sWRX8",ano:"2022"}
,{score:80,id:"AMDRyzenThreadripperPRO5955WX",nome:"AMD Ryzen Threadripper PRO 5955WX",nucleos:"16",threads:"32",base:"4.0GHz",boost:"4.5GHz",tdp:"280W",socket:"sWRX8",ano:"2022"}
,{score:85,id:"AMDRyzenThreadripperPRO5965WX",nome:"AMD Ryzen Threadripper PRO 5965WX",nucleos:"24",threads:"48",base:"3.8GHz",boost:"4.5GHz",tdp:"280W",socket:"sWRX8",ano:"2022"}
,{score:90,id:"AMDRyzenThreadripperPRO5975WX",nome:"AMD Ryzen Threadripper PRO 5975WX",nucleos:"32",threads:"64",base:"3.6GHz",boost:"4.5GHz",tdp:"280W",socket:"sWRX8",ano:"2022"}
,{score:95,id:"AMDRyzenThreadripperPRO5995WX",nome:"AMD Ryzen Threadripper PRO 5995WX",nucleos:"64",threads:"128",base:"2.7GHz",boost:"4.5GHz",tdp:"280W",socket:"sWRX8",ano:"2022"}


,{score:55,id:"AMDRyzen55600X3D",nome:"AMD Ryzen 5 5600X3D",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.4GHz",tdp:"120W",socket:"AM5",ano:"2023"}
,{score:55,id:"AMDRyzen57500F",nome:"AMD Ryzen 5 7500F",nucleos:"6",threads:"12",base:"3.7GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2023"}
,{score:55,id:"AMDRyzen57600",nome:"AMD Ryzen 5 7600",nucleos:"6",threads:"12",base:"3.8GHz",boost:"5.1GHz",tdp:"65W",socket:"AM5",ano:"2023"}
,{score:55,id:"AMDRyzen5PRO7645",nome:"AMD Ryzen 5 PRO 7645",nucleos:"6",threads:"12",base:"3.8GHz",boost:"5.1GHz",tdp:"65W",socket:"AM5",ano:"2023"}
,{score:68,id:"AMDRyzen77700",nome:"AMD Ryzen 7 7700",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.3GHz",tdp:"65W",socket:"AM5",ano:"2023"}
,{score:68,id:"AMDRyzen77800X3D",nome:"AMD Ryzen 7 7800X3D",nucleos:"8",threads:"16",base:"4.2GHz",boost:"5.0GHz",tdp:"120W",socket:"AM5",ano:"2023"}
,{score:68,id:"AMDRyzen7PRO7745",nome:"AMD Ryzen 7 PRO 7745",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.3GHz",tdp:"65W",socket:"AM5",ano:"2023"}
,{score:78,id:"AMDRyzen97900",nome:"AMD Ryzen 9 7900",nucleos:"12",threads:"24",base:"3.7GHz",boost:"5.4GHz",tdp:"170W",socket:"AM5",ano:"2023"}
,{score:85,id:"AMDRyzen97900X3D",nome:"AMD Ryzen 9 7900X3D",nucleos:"12",threads:"24",base:"4.4GHz",boost:"5.6GHz",tdp:"120W",socket:"AM5",ano:"2023"}
,{score:85,id:"AMDRyzen97950X3D",nome:"AMD Ryzen 9 7950X3D",nucleos:"16",threads:"32",base:"4.2GHz",boost:"5.7GHz",tdp:"120W",socket:"AM5",ano:"2023"}
,{score:78,id:"AMDRyzen9PRO7945",nome:"AMD Ryzen 9 PRO 7945",nucleos:"12",threads:"24",base:"3.7GHz",boost:"5.4GHz",tdp:"170W",socket:"AM5",ano:"2023"}
,{score:78,id:"AppleM2Max30coreGPU",nome:"Apple M2 Max (30-core GPU)",nucleos:"12",threads:"12",base:"0.7GHz",boost:"3.7GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:78,id:"AppleM2Max38coreGPU",nome:"Apple M2 Max (38-core GPU)",nucleos:"12",threads:"12",base:"0.7GHz",boost:"3.7GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:74,id:"AppleM2Pro10coreCPU",nome:"Apple M2 Pro (10-core CPU)",nucleos:"10",threads:"10",base:"0.7GHz",boost:"3.5GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:74,id:"AppleM2Pro19coreGPU",nome:"Apple M2 Pro (19-core GPU)",nucleos:"12",threads:"12",base:"0.7GHz",boost:"3.5GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:80,id:"AppleM2Ultra60coreGPU",nome:"Apple M2 Ultra (60-core GPU)",nucleos:"24",threads:"24",base:"0.7GHz",boost:"3.7GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:80,id:"AppleM2Ultra76coreGPU",nome:"Apple M2 Ultra (76-core GPU)",nucleos:"24",threads:"24",base:"0.7GHz",boost:"3.7GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:70,id:"AppleM310coreGPU",nome:"Apple M3 (10-core GPU)",nucleos:"8",threads:"8",base:"0.82GHz",boost:"4.06GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:70,id:"AppleM38coreGPU",nome:"Apple M3 (8-core GPU)",nucleos:"8",threads:"8",base:"0.82GHz",boost:"4.06GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:35,id:"IntelCorei313100",nome:"Intel Core i3-13100",nucleos:"4",threads:"8",base:"3.4GHz",boost:"4.5GHz",tdp:"60W",socket:"LGA1700",ano:"2023"}
,{score:35,id:"IntelCorei313100F",nome:"Intel Core i3-13100F",nucleos:"4",threads:"8",base:"3.4GHz",boost:"4.5GHz",tdp:"60W",socket:"LGA1700",ano:"2023"}
,{score:35,id:"IntelCorei313100T",nome:"Intel Core i3-13100T",nucleos:"4",threads:"8",base:"2.5GHz",boost:"4.2GHz",tdp:"60W",socket:"LGA1700",ano:"2023"}
,{score:55,id:"IntelCorei513400",nome:"Intel Core i5-13400",nucleos:"10",threads:"16",base:"2.5GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:55,id:"IntelCorei513400F",nome:"Intel Core i5-13400F",nucleos:"10",threads:"16",base:"2.5GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:55,id:"IntelCorei513400T",nome:"Intel Core i5-13400T",nucleos:"10",threads:"16",base:"1.3GHz",boost:"4.4GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:55,id:"IntelCorei513500",nome:"Intel Core i5-13500",nucleos:"14",threads:"20",base:"2.5GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:55,id:"IntelCorei513500T",nome:"Intel Core i5-13500T",nucleos:"14",threads:"20",base:"1.6GHz",boost:"4.6GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:55,id:"IntelCorei513600",nome:"Intel Core i5-13600",nucleos:"14",threads:"20",base:"2.7GHz",boost:"5.0GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:55,id:"IntelCorei513600T",nome:"Intel Core i5-13600T",nucleos:"14",threads:"20",base:"1.8GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:62,id:"IntelCorei514600K",nome:"Intel Core i5-14600K",nucleos:"14",threads:"20",base:"3.5GHz",boost:"5.3GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:62,id:"IntelCorei514600KF",nome:"Intel Core i5-14600KF",nucleos:"14",threads:"20",base:"3.5GHz",boost:"5.3GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:68,id:"IntelCorei713700",nome:"Intel Core i7-13700",nucleos:"16",threads:"24",base:"2.1GHz",boost:"5.2GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:68,id:"IntelCorei713700F",nome:"Intel Core i7-13700F",nucleos:"16",threads:"24",base:"2.1GHz",boost:"5.2GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:68,id:"IntelCorei713700T",nome:"Intel Core i7-13700T",nucleos:"16",threads:"24",base:"1.4GHz",boost:"4.9GHz",tdp:"65W",socket:"LGA1700",ano:"2023"}
,{score:72,id:"IntelCorei714700K",nome:"Intel Core i7-14700K",nucleos:"20",threads:"28",base:"3.4GHz",boost:"5.6GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:72,id:"IntelCorei714700KF",nome:"Intel Core i7-14700KF",nucleos:"20",threads:"28",base:"3.4GHz",boost:"5.6GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:78,id:"IntelCorei913900",nome:"Intel Core i9-13900",nucleos:"24",threads:"32",base:"2.0GHz",boost:"5.6GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:78,id:"IntelCorei913900F",nome:"Intel Core i9-13900F",nucleos:"24",threads:"32",base:"2.0GHz",boost:"5.6GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:85,id:"IntelCorei913900KS",nome:"Intel Core i9-13900KS",nucleos:"24",threads:"32",base:"3.2GHz",boost:"6.0GHz",tdp:"150W",socket:"LGA1700",ano:"2023"}
,{score:78,id:"IntelCorei913900T",nome:"Intel Core i9-13900T",nucleos:"24",threads:"32",base:"1.1GHz",boost:"5.3GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:85,id:"IntelCorei914900K",nome:"Intel Core i9-14900K",nucleos:"24",threads:"32",base:"3.2GHz",boost:"6.0GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:85,id:"IntelCorei914900KF",nome:"Intel Core i9-14900KF",nucleos:"24",threads:"32",base:"3.2GHz",boost:"6.0GHz",tdp:"125W",socket:"LGA1700",ano:"2023"}
,{score:22,id:"AMDAthlonGold7220C",nome:"AMD Athlon Gold 7220C",nucleos:"2",threads:"4",base:"2.4GHz",boost:"3.7GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:22,id:"AMDAthlonSilver7120C",nome:"AMD Athlon Silver 7120C",nucleos:"2",threads:"2",base:"2.4GHz",boost:"3.5GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:35,id:"AMDRyzen37320C",nome:"AMD Ryzen 3 7320C",nucleos:"4",threads:"8",base:"2.4GHz",boost:"4.1GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:35,id:"AMDRyzen37330U",nome:"AMD Ryzen 3 7330U",nucleos:"4",threads:"8",base:"2.3GHz",boost:"4.3GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:35,id:"AMDRyzen37335U",nome:"AMD Ryzen 3 7335U",nucleos:"4",threads:"8",base:"3.0GHz",boost:"4.3GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:35,id:"AMDRyzen37440U",nome:"AMD Ryzen 3 7440U",nucleos:"4",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:35,id:"AMDRyzen38440U",nome:"AMD Ryzen 3 8440U",nucleos:"4",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:35,id:"AMDRyzen3PRO7330U",nome:"AMD Ryzen 3 PRO 7330U",nucleos:"4",threads:"8",base:"2.3GHz",boost:"4.3GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:35,id:"AMDRyzen3PRO7335U",nome:"AMD Ryzen 3 PRO 7335U",nucleos:"4",threads:"8",base:"3.0GHz",boost:"4.3GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"AMDRyzen55500H",nome:"AMD Ryzen 5 5500H",nucleos:"4",threads:"8",base:"3.3GHz",boost:"4.2GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen57430U",nome:"AMD Ryzen 5 7430U",nucleos:"6",threads:"12",base:"2.3GHz",boost:"4.3GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen57520C",nome:"AMD Ryzen 5 7520C",nucleos:"4",threads:"8",base:"2.8GHz",boost:"4.3GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen57530U",nome:"AMD Ryzen 5 7530U",nucleos:"6",threads:"12",base:"2.0GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"AMDRyzen57535HS",nome:"AMD Ryzen 5 7535HS",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.55GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen57535U",nome:"AMD Ryzen 5 7535U",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.55GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen57540U",nome:"AMD Ryzen 5 7540U",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen57545U",nome:"AMD Ryzen 5 7545U",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"AMDRyzen57640HS",nome:"AMD Ryzen 5 7640HS",nucleos:"6",threads:"12",base:"4.3GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen57640U",nome:"AMD Ryzen 5 7640U",nucleos:"6",threads:"12",base:"3.5GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:58,id:"AMDRyzen57645HX",nome:"AMD Ryzen 5 7645HX",nucleos:"6",threads:"12",base:"4.0GHz",boost:"5.0GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen58540U",nome:"AMD Ryzen 5 8540U",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"AMDRyzen58640HS",nome:"AMD Ryzen 5 8640HS",nucleos:"6",threads:"12",base:"3.5GHz",boost:"4.9GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen58640U",nome:"AMD Ryzen 5 8640U",nucleos:"6",threads:"12",base:"3.5GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"AMDRyzen58645HS",nome:"AMD Ryzen 5 8645HS",nucleos:"6",threads:"12",base:"4.3GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen5PRO7530U",nome:"AMD Ryzen 5 PRO 7530U",nucleos:"6",threads:"12",base:"2.0GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen5PRO7535U",nome:"AMD Ryzen 5 PRO 7535U",nucleos:"6",threads:"12",base:"2.9GHz",boost:"4.55GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen5PRO7540U",nome:"AMD Ryzen 5 PRO 7540U",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen5PRO7545U",nome:"AMD Ryzen 5 PRO 7545U",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"AMDRyzen5PRO7640HS",nome:"AMD Ryzen 5 PRO 7640HS",nucleos:"6",threads:"12",base:"4.3GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:55,id:"AMDRyzen5PRO7640U",nome:"AMD Ryzen 5 PRO 7640U",nucleos:"6",threads:"12",base:"3.5GHz",boost:"4.9GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:62,id:"AMDRyzen77445HS",nome:"AMD Ryzen 7 7445HS",nucleos:"6",threads:"12",base:"3.55GHz",boost:"4.7GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen77730U",nome:"AMD Ryzen 7 7730U",nucleos:"8",threads:"16",base:"2.0GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:62,id:"AMDRyzen77735HS",nome:"AMD Ryzen 7 7735HS",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.75GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen77735U",nome:"AMD Ryzen 7 7735U",nucleos:"8",threads:"16",base:"2.7GHz",boost:"4.75GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen77736U",nome:"AMD Ryzen 7 7736U",nucleos:"8",threads:"16",base:"2.7GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen77745HX",nome:"AMD Ryzen 7 7745HX",nucleos:"8",threads:"16",base:"3.6GHz",boost:"5.1GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:62,id:"AMDRyzen77840HS",nome:"AMD Ryzen 7 7840HS",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.1GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen77840U",nome:"AMD Ryzen 7 7840U",nucleos:"8",threads:"16",base:"3.3GHz",boost:"5.1GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:62,id:"AMDRyzen78840HS",nome:"AMD Ryzen 7 8840HS",nucleos:"8",threads:"16",base:"3.3GHz",boost:"5.1GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen78840U",nome:"AMD Ryzen 7 8840U",nucleos:"8",threads:"16",base:"3.3GHz",boost:"5.1GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:62,id:"AMDRyzen78845HS",nome:"AMD Ryzen 7 8845HS",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.1GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen7PRO7730U",nome:"AMD Ryzen 7 PRO 7730U",nucleos:"8",threads:"16",base:"2.0GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen7PRO7735U",nome:"AMD Ryzen 7 PRO 7735U",nucleos:"8",threads:"16",base:"2.7GHz",boost:"4.75GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:62,id:"AMDRyzen7PRO7840HS",nome:"AMD Ryzen 7 PRO 7840HS",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.1GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"AMDRyzen7PRO7840U",nome:"AMD Ryzen 7 PRO 7840U",nucleos:"8",threads:"16",base:"3.3GHz",boost:"5.1GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:78,id:"AMDRyzen97845HX",nome:"AMD Ryzen 9 7845HX",nucleos:"12",threads:"24",base:"3.0GHz",boost:"5.2GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:72,id:"AMDRyzen97940HS",nome:"AMD Ryzen 9 7940HS",nucleos:"8",threads:"16",base:"4.0GHz",boost:"5.2GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:78,id:"AMDRyzen97945HX",nome:"AMD Ryzen 9 7945HX",nucleos:"16",threads:"32",base:"2.5GHz",boost:"5.4GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:85,id:"AMDRyzen97945HX3D",nome:"AMD Ryzen 9 7945HX3D",nucleos:"16",threads:"32",base:"2.3GHz",boost:"5.4GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:72,id:"AMDRyzen98945HS",nome:"AMD Ryzen 9 8945HS",nucleos:"8",threads:"16",base:"4.0GHz",boost:"5.2GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:72,id:"AMDRyzen9PRO7940HS",nome:"AMD Ryzen 9 PRO 7940HS",nucleos:"8",threads:"16",base:"4.0GHz",boost:"5.2GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:78,id:"AppleM3Max30coreGPU",nome:"Apple M3 Max (30-core GPU)",nucleos:"14",threads:"14",base:"1.09GHz",boost:"4.06GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:78,id:"AppleM3Max40coreGPU",nome:"Apple M3 Max (40-core GPU)",nucleos:"16",threads:"16",base:"1.09GHz",boost:"4.06GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:74,id:"AppleM3Pro14coreGPU",nome:"Apple M3 Pro (14-core GPU)",nucleos:"11",threads:"11",base:"0.7GHz",boost:"4.06GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:74,id:"AppleM3Pro18coreGPU",nome:"Apple M3 Pro (18-core GPU)",nucleos:"12",threads:"12",base:"0.7GHz",boost:"4.06GHz",tdp:"65W",socket:"Mobile",ano:"2023"}
,{score:35,id:"IntelCorei31305U",nome:"Intel Core i3-1305U",nucleos:"5",threads:"6",base:"1.6GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:35,id:"IntelCorei31315U",nome:"Intel Core i3-1315U",nucleos:"6",threads:"8",base:"1.2GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:25,id:"IntelCorei3N300",nome:"Intel Core i3-N300",nucleos:"8",threads:"8",base:"0.8GHz",boost:"3.8GHz",tdp:"6W",socket:"Mobile",ano:"2023"}
,{score:25,id:"IntelCorei3N305",nome:"Intel Core i3-N305",nucleos:"8",threads:"8",base:"1.8GHz",boost:"3.8GHz",tdp:"6W",socket:"Mobile",ano:"2023"}
,{score:55,id:"IntelCorei51334U",nome:"Intel Core i5-1334U",nucleos:"10",threads:"12",base:"1.3GHz",boost:"4.6GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:55,id:"IntelCorei51335U",nome:"Intel Core i5-1335U",nucleos:"10",threads:"12",base:"1.3GHz",boost:"4.6GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:55,id:"IntelCorei51340P",nome:"Intel Core i5-1340P",nucleos:"12",threads:"16",base:"1.9GHz",boost:"4.6GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"IntelCorei513420H",nome:"Intel Core i5-13420H",nucleos:"8",threads:"12",base:"2.1GHz",boost:"4.6GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:58,id:"IntelCorei513450HX",nome:"Intel Core i5-13450HX",nucleos:"10",threads:"16",base:"2.4GHz",boost:"4.6GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:55,id:"IntelCorei51345U",nome:"Intel Core i5-1345U",nucleos:"10",threads:"12",base:"1.6GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"IntelCorei513500H",nome:"Intel Core i5-13500H",nucleos:"12",threads:"16",base:"2.6GHz",boost:"4.7GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:58,id:"IntelCorei513500HX",nome:"Intel Core i5-13500HX",nucleos:"14",threads:"20",base:"2.5GHz",boost:"4.7GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:52,id:"IntelCorei513505H",nome:"Intel Core i5-13505H",nucleos:"12",threads:"16",base:"2.6GHz",boost:"4.7GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:55,id:"IntelCorei51350P",nome:"Intel Core i5-1350P",nucleos:"12",threads:"16",base:"1.9GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:52,id:"IntelCorei513600H",nome:"Intel Core i5-13600H",nucleos:"12",threads:"16",base:"2.8GHz",boost:"4.8GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:58,id:"IntelCorei513600HX",nome:"Intel Core i5-13600HX",nucleos:"14",threads:"20",base:"2.6GHz",boost:"4.8GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCorei71355U",nome:"Intel Core i7-1355U",nucleos:"10",threads:"12",base:"1.7GHz",boost:"5.0GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCorei71360P",nome:"Intel Core i7-1360P",nucleos:"12",threads:"16",base:"2.2GHz",boost:"5.0GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:62,id:"IntelCorei713620H",nome:"Intel Core i7-13620H",nucleos:"10",threads:"16",base:"2.4GHz",boost:"4.9GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCorei713650HX",nome:"Intel Core i7-13650HX",nucleos:"14",threads:"20",base:"2.6GHz",boost:"4.9GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCorei71365U",nome:"Intel Core i7-1365U",nucleos:"10",threads:"12",base:"1.8GHz",boost:"5.2GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:62,id:"IntelCorei713700H",nome:"Intel Core i7-13700H",nucleos:"14",threads:"20",base:"2.4GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCorei713700HX",nome:"Intel Core i7-13700HX",nucleos:"16",threads:"24",base:"2.1GHz",boost:"5.0GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:62,id:"IntelCorei713705H",nome:"Intel Core i7-13705H",nucleos:"14",threads:"20",base:"2.4GHz",boost:"5.0GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCorei71370P",nome:"Intel Core i7-1370P",nucleos:"14",threads:"20",base:"1.9GHz",boost:"5.2GHz",tdp:"15W",socket:"Mobile",ano:"2023"}
,{score:62,id:"IntelCorei713800H",nome:"Intel Core i7-13800H",nucleos:"14",threads:"20",base:"2.5GHz",boost:"5.2GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCorei713850HX",nome:"Intel Core i7-13850HX",nucleos:"20",threads:"28",base:"2.1GHz",boost:"5.3GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:72,id:"IntelCorei913900H",nome:"Intel Core i9-13900H",nucleos:"14",threads:"20",base:"2.6GHz",boost:"5.4GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:85,id:"IntelCorei913900HK",nome:"Intel Core i9-13900HK",nucleos:"14",threads:"20",base:"2.6GHz",boost:"5.4GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:78,id:"IntelCorei913900HX",nome:"Intel Core i9-13900HX",nucleos:"24",threads:"32",base:"2.2GHz",boost:"5.4GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:72,id:"IntelCorei913905H",nome:"Intel Core i9-13905H",nucleos:"14",threads:"20",base:"2.6GHz",boost:"5.4GHz",tdp:"45W",socket:"Mobile",ano:"2023"}
,{score:78,id:"IntelCorei913950HX",nome:"Intel Core i9-13950HX",nucleos:"24",threads:"32",base:"2.2GHz",boost:"5.5GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:78,id:"IntelCorei913980HX",nome:"Intel Core i9-13980HX",nucleos:"24",threads:"32",base:"2.2GHz",boost:"5.6GHz",tdp:"55W",socket:"Mobile",ano:"2023"}
,{score:58,id:"IntelCoreUltra5processor125H",nome:"Intel Core Ultra 5 processor 125H",nucleos:"14",threads:"18",base:"1.2GHz",boost:"4.5GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:58,id:"IntelCoreUltra5processor125U",nome:"Intel Core Ultra 5 processor 125U",nucleos:"12",threads:"14",base:"1.3GHz",boost:"4.3GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:58,id:"IntelCoreUltra5processor134U",nome:"Intel Core Ultra 5 processor 134U",nucleos:"12",threads:"14",base:"0.7GHz",boost:"4.4GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:58,id:"IntelCoreUltra5processor135H",nome:"Intel Core Ultra 5 processor 135H",nucleos:"14",threads:"18",base:"1.7GHz",boost:"4.6GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:58,id:"IntelCoreUltra5processor135U",nome:"Intel Core Ultra 5 processor 135U",nucleos:"12",threads:"14",base:"1.6GHz",boost:"4.4GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCoreUltra7processor155H",nome:"Intel Core Ultra 7 processor 155H",nucleos:"16",threads:"22",base:"1.4GHz",boost:"4.8GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCoreUltra7processor155U",nome:"Intel Core Ultra 7 processor 155U",nucleos:"12",threads:"14",base:"1.7GHz",boost:"4.8GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCoreUltra7processor164U",nome:"Intel Core Ultra 7 processor 164U",nucleos:"12",threads:"14",base:"1.1GHz",boost:"4.8GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCoreUltra7processor165H",nome:"Intel Core Ultra 7 processor 165H",nucleos:"16",threads:"22",base:"1.4GHz",boost:"5.0GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:68,id:"IntelCoreUltra7processor165U",nome:"Intel Core Ultra 7 processor 165U",nucleos:"12",threads:"14",base:"1.7GHz",boost:"4.9GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:75,id:"IntelCoreUltra9processor185H",nome:"Intel Core Ultra 9 processor 185H",nucleos:"16",threads:"22",base:"2.3GHz",boost:"5.1GHz",tdp:"28W",socket:"Mobile",ano:"2023"}
,{score:20,id:"IntelProcessorN100",nome:"Intel Processor N100",nucleos:"4",threads:"4",base:"0.8GHz",boost:"3.4GHz",tdp:"6W",socket:"Mobile",ano:"2023"}
,{score:20,id:"IntelProcessorN200",nome:"Intel Processor N200",nucleos:"4",threads:"4",base:"1.0GHz",boost:"3.7GHz",tdp:"6W",socket:"Mobile",ano:"2023"}
,{score:20,id:"IntelProcessorU300",nome:"Intel Processor U300",nucleos:"5",threads:"6",base:"1.2GHz",boost:"4.4GHz",tdp:"18W",socket:"Mobile",ano:"2023"}
,{score:80,id:"AMDRyzenThreadripper7960X",nome:"AMD Ryzen Threadripper 7960X",nucleos:"24",threads:"48",base:"4.2GHz",boost:"5.3GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:85,id:"AMDRyzenThreadripper7970X",nome:"AMD Ryzen Threadripper 7970X",nucleos:"32",threads:"64",base:"4.0GHz",boost:"5.3GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:90,id:"AMDRyzenThreadripper7980X",nome:"AMD Ryzen Threadripper 7980X",nucleos:"64",threads:"128",base:"3.2GHz",boost:"5.1GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:75,id:"AMDRyzenThreadripperPRO7945WX",nome:"AMD Ryzen Threadripper PRO 7945WX",nucleos:"12",threads:"24",base:"4.7GHz",boost:"5.3GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:75,id:"AMDRyzenThreadripperPRO7955WX",nome:"AMD Ryzen Threadripper PRO 7955WX",nucleos:"16",threads:"32",base:"4.5GHz",boost:"5.3GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:80,id:"AMDRyzenThreadripperPRO7965WX",nome:"AMD Ryzen Threadripper PRO 7965WX",nucleos:"24",threads:"48",base:"4.2GHz",boost:"5.3GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:85,id:"AMDRyzenThreadripperPRO7975WX",nome:"AMD Ryzen Threadripper PRO 7975WX",nucleos:"32",threads:"64",base:"4.0GHz",boost:"5.3GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:90,id:"AMDRyzenThreadripperPRO7985WX",nome:"AMD Ryzen Threadripper PRO 7985WX",nucleos:"64",threads:"128",base:"3.2GHz",boost:"5.1GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:95,id:"AMDRyzenThreadripperPRO7995WX",nome:"AMD Ryzen Threadripper PRO 7995WX",nucleos:"96",threads:"192",base:"2.5GHz",boost:"5.1GHz",tdp:"280W",socket:"sWRX8",ano:"2023"}
,{score:52,id:"IntelXeonw32423",nome:"Intel Xeon w3-2423",nucleos:"6",threads:"12",base:"2.1GHz",boost:"4.2GHz",tdp:"240W",socket:"LGA4677",ano:"2023"}
,{score:52,id:"IntelXeonw32425",nome:"Intel Xeon w3-2425",nucleos:"6",threads:"12",base:"3.0GHz",boost:"4.4GHz",tdp:"240W",socket:"LGA4677",ano:"2023"}
,{score:52,id:"IntelXeonw32435",nome:"Intel Xeon w3-2435",nucleos:"8",threads:"16",base:"3.1GHz",boost:"4.5GHz",tdp:"240W",socket:"LGA4677",ano:"2023"}
,{score:58,id:"IntelXeonw52445",nome:"Intel Xeon w5-2445",nucleos:"10",threads:"20",base:"3.1GHz",boost:"4.6GHz",tdp:"280W",socket:"LGA4677",ano:"2023"}
,{score:62,id:"IntelXeonw52455X",nome:"Intel Xeon w5-2455X",nucleos:"12",threads:"24",base:"3.2GHz",boost:"4.6GHz",tdp:"280W",socket:"LGA4677",ano:"2023"}
,{score:68,id:"IntelXeonw52465X",nome:"Intel Xeon w5-2465X",nucleos:"16",threads:"32",base:"3.1GHz",boost:"4.7GHz",tdp:"280W",socket:"LGA4677",ano:"2023"}
,{score:62,id:"IntelXeonw53425",nome:"Intel Xeon w5-3425",nucleos:"12",threads:"24",base:"3.2GHz",boost:"4.6GHz",tdp:"280W",socket:"LGA4677",ano:"2023"}
,{score:68,id:"IntelXeonw53435X",nome:"Intel Xeon w5-3435X",nucleos:"16",threads:"32",base:"3.1GHz",boost:"4.7GHz",tdp:"280W",socket:"LGA4677",ano:"2023"}
,{score:72,id:"IntelXeonw72475X",nome:"Intel Xeon w7-2475X",nucleos:"20",threads:"40",base:"2.6GHz",boost:"4.8GHz",tdp:"320W",socket:"LGA4677",ano:"2023"}
,{score:78,id:"IntelXeonw72495X",nome:"Intel Xeon w7-2495X",nucleos:"24",threads:"48",base:"2.5GHz",boost:"4.8GHz",tdp:"320W",socket:"LGA4677",ano:"2023"}
,{score:72,id:"IntelXeonw73445",nome:"Intel Xeon w7-3445",nucleos:"20",threads:"40",base:"2.6GHz",boost:"4.8GHz",tdp:"320W",socket:"LGA4677",ano:"2023"}
,{score:78,id:"IntelXeonw73455",nome:"Intel Xeon w7-3455",nucleos:"24",threads:"48",base:"2.5GHz",boost:"4.8GHz",tdp:"320W",socket:"LGA4677",ano:"2023"}
,{score:80,id:"IntelXeonw73465X",nome:"Intel Xeon w7-3465X",nucleos:"28",threads:"56",base:"2.5GHz",boost:"4.8GHz",tdp:"320W",socket:"LGA4677",ano:"2023"}
,{score:85,id:"IntelXeonw93475X",nome:"Intel Xeon w9-3475X",nucleos:"36",threads:"72",base:"2.2GHz",boost:"4.8GHz",tdp:"350W",socket:"LGA4677",ano:"2023"}
,{score:90,id:"IntelXeonw93495X",nome:"Intel Xeon w9-3495X",nucleos:"56",threads:"112",base:"1.9GHz",boost:"4.8GHz",tdp:"350W",socket:"LGA4677",ano:"2023"}
,{score:55,id:"AMDRyzen38300G",nome:"AMD Ryzen 3 8300G",nucleos:"4",threads:"8",base:"3.4GHz",boost:"4.9GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:55,id:"AMDRyzen38300GE",nome:"AMD Ryzen 3 8300GE",nucleos:"4",threads:"8",base:"3.5GHz",boost:"4.9GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:48,id:"AMDRyzen3PRO5355G",nome:"AMD Ryzen 3 PRO 5355G",nucleos:"4",threads:"8",base:"4.0GHz",boost:"4.2GHz",tdp:"35W",socket:"AM4",ano:"2024"}
,{score:48,id:"AMDRyzen3PRO5355GE",nome:"AMD Ryzen 3 PRO 5355GE",nucleos:"4",threads:"8",base:"3.6GHz",boost:"4.2GHz",tdp:"35W",socket:"AM4",ano:"2024"}
,{score:55,id:"AMDRyzen3PRO8300G",nome:"AMD Ryzen 3 PRO 8300G",nucleos:"4",threads:"8",base:"3.4GHz",boost:"4.9GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:55,id:"AMDRyzen3PRO8300GE",nome:"AMD Ryzen 3 PRO 8300GE",nucleos:"4",threads:"8",base:"3.5GHz",boost:"4.9GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:53,id:"AMDRyzen55500GT",nome:"AMD Ryzen 5 5500GT",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.4GHz",tdp:"35W",socket:"AM4",ano:"2024"}
,{score:55,id:"AMDRyzen55600GT",nome:"AMD Ryzen 5 5600GT",nucleos:"6",threads:"12",base:"3.6GHz",boost:"4.6GHz",tdp:"35W",socket:"AM4",ano:"2024"}
,{score:60,id:"AMDRyzen55600T",nome:"AMD Ryzen 5 5600T",nucleos:"6",threads:"12",base:"3.5GHz",boost:"4.5GHz",tdp:"65W",socket:"AM4",ano:"2024"}
,{score:60,id:"AMDRyzen55600XT",nome:"AMD Ryzen 5 5600XT",nucleos:"6",threads:"12",base:"3.7GHz",boost:"4.7GHz",tdp:"65W",socket:"AM4",ano:"2024"}
,{score:65,id:"AMDRyzen57600X3D",nome:"AMD Ryzen 5 7600X3D",nucleos:"6",threads:"12",base:"4.1GHz",boost:"4.7GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:56,id:"AMDRyzen58400F",nome:"AMD Ryzen 5 8400F",nucleos:"6",threads:"12",base:"4.2GHz",boost:"4.7GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:59,id:"AMDRyzen58500G",nome:"AMD Ryzen 5 8500G",nucleos:"6",threads:"12",base:"3.5GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:59,id:"AMDRyzen58500GE",nome:"AMD Ryzen 5 8500GE",nucleos:"6",threads:"12",base:"3.4GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:59,id:"AMDRyzen58600G",nome:"AMD Ryzen 5 8600G",nucleos:"6",threads:"12",base:"4.3GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:70,id:"AMDRyzen59600X",nome:"AMD Ryzen 5 9600X",nucleos:"6",threads:"12",base:"3.9GHz",boost:"5.4GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:53,id:"AMDRyzen5PRO5655G",nome:"AMD Ryzen 5 PRO 5655G",nucleos:"6",threads:"12",base:"3.9GHz",boost:"4.4GHz",tdp:"35W",socket:"AM4",ano:"2024"}
,{score:53,id:"AMDRyzen5PRO5655GE",nome:"AMD Ryzen 5 PRO 5655GE",nucleos:"6",threads:"12",base:"3.4GHz",boost:"4.4GHz",tdp:"35W",socket:"AM4",ano:"2024"}
,{score:59,id:"AMDRyzen5PRO8500G",nome:"AMD Ryzen 5 PRO 8500G",nucleos:"6",threads:"12",base:"3.5GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:59,id:"AMDRyzen5PRO8500GE",nome:"AMD Ryzen 5 PRO 8500GE",nucleos:"6",threads:"12",base:"3.4GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:59,id:"AMDRyzen5PRO8600G",nome:"AMD Ryzen 5 PRO 8600G",nucleos:"6",threads:"12",base:"4.3GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:59,id:"AMDRyzen5PRO8600GE",nome:"AMD Ryzen 5 PRO 8600GE",nucleos:"6",threads:"12",base:"3.9GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:72,id:"AMDRyzen75700X3D",nome:"AMD Ryzen 7 5700X3D",nucleos:"8",threads:"16",base:"3.0GHz",boost:"4.1GHz",tdp:"105W",socket:"AM4",ano:"2024"}
,{score:68,id:"AMDRyzen75800XT",nome:"AMD Ryzen 7 5800XT",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.8GHz",tdp:"105W",socket:"AM4",ano:"2024"}
,{score:70,id:"AMDRyzen78700F",nome:"AMD Ryzen 7 8700F",nucleos:"8",threads:"16",base:"4.1GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:70,id:"AMDRyzen78700G",nome:"AMD Ryzen 7 8700G",nucleos:"8",threads:"16",base:"4.2GHz",boost:"5.1GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:78,id:"AMDRyzen79700X",nome:"AMD Ryzen 7 9700X",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.5GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:95,id:"AMDRyzen79800X3D",nome:"AMD Ryzen 7 9800X3D",nucleos:"8",threads:"16",base:"4.7GHz",boost:"5.2GHz",tdp:"120W",socket:"AM5",ano:"2024"}
,{score:58,id:"AMDRyzen7PRO5755G",nome:"AMD Ryzen 7 PRO 5755G",nucleos:"8",threads:"16",base:"3.8GHz",boost:"4.6GHz",tdp:"35W",socket:"AM4",ano:"2024"}
,{score:58,id:"AMDRyzen7PRO5755GE",nome:"AMD Ryzen 7 PRO 5755GE",nucleos:"8",threads:"16",base:"3.2GHz",boost:"4.6GHz",tdp:"35W",socket:"AM4",ano:"2024"}
,{score:70,id:"AMDRyzen7PRO8700G",nome:"AMD Ryzen 7 PRO 8700G",nucleos:"8",threads:"16",base:"4.2GHz",boost:"5.1GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:70,id:"AMDRyzen7PRO8700GE",nome:"AMD Ryzen 7 PRO 8700GE",nucleos:"8",threads:"16",base:"3.6GHz",boost:"5.1GHz",tdp:"65W",socket:"AM5",ano:"2024"}
,{score:75,id:"AMDRyzen95900XT",nome:"AMD Ryzen 9 5900XT",nucleos:"16",threads:"32",base:"3.3GHz",boost:"4.8GHz",tdp:"105W",socket:"AM4",ano:"2024"}
,{score:88,id:"AMDRyzen99900X",nome:"AMD Ryzen 9 9900X",nucleos:"12",threads:"24",base:"4.4GHz",boost:"5.6GHz",tdp:"120W",socket:"AM5",ano:"2024"}
,{score:95,id:"AMDRyzen99950X",nome:"AMD Ryzen 9 9950X",nucleos:"16",threads:"32",base:"4.3GHz",boost:"5.7GHz",tdp:"170W",socket:"AM5",ano:"2024"}
,{score:80,id:"AppleM410coreGPU",nome:"Apple M4 (10-core GPU)",nucleos:"10",threads:"10",base:"0.91GHz",boost:"4.46GHz",tdp:"N/A",socket:"Apple Silicon",ano:"2024"}
,{score:80,id:"AppleM48coreGPU",nome:"Apple M4 (8-core GPU)",nucleos:"8",threads:"8",base:"0.91GHz",boost:"4.46GHz",tdp:"N/A",socket:"Apple Silicon",ano:"2024"}
,{score:90,id:"AppleM4Max32coreGPU",nome:"Apple M4 Max (32-core GPU)",nucleos:"14",threads:"14",base:"1.26GHz",boost:"4.51GHz",tdp:"N/A",socket:"Apple Silicon",ano:"2024"}
,{score:90,id:"AppleM4Max40coreGPU",nome:"Apple M4 Max (40-core GPU)",nucleos:"16",threads:"16",base:"1.26GHz",boost:"4.51GHz",tdp:"N/A",socket:"Apple Silicon",ano:"2024"}
,{score:85,id:"AppleM4Pro16coreGPU",nome:"Apple M4 Pro (16-core GPU)",nucleos:"12",threads:"12",base:"1.26GHz",boost:"4.51GHz",tdp:"N/A",socket:"Apple Silicon",ano:"2024"}
,{score:85,id:"AppleM4Pro20coreGPU",nome:"Apple M4 Pro (20-core GPU)",nucleos:"14",threads:"14",base:"1.26GHz",boost:"4.51GHz",tdp:"N/A",socket:"Apple Silicon",ano:"2024"}
,{score:53,id:"IntelCorei314100",nome:"Intel Core i3-14100",nucleos:"4",threads:"8",base:"3.5GHz",boost:"4.7GHz",tdp:"60W",socket:"LGA1700",ano:"2024"}
,{score:53,id:"IntelCorei314100F",nome:"Intel Core i3-14100F",nucleos:"4",threads:"8",base:"3.5GHz",boost:"4.7GHz",tdp:"60W",socket:"LGA1700",ano:"2024"}
,{score:50,id:"IntelCorei314100T",nome:"Intel Core i3-14100T",nucleos:"4",threads:"8",base:"2.7GHz",boost:"4.4GHz",tdp:"60W",socket:"LGA1700",ano:"2024"}
,{score:62,id:"IntelCorei514400",nome:"Intel Core i5-14400",nucleos:"10",threads:"16",base:"2.5GHz",boost:"4.7GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:62,id:"IntelCorei514400F",nome:"Intel Core i5-14400F",nucleos:"10",threads:"16",base:"2.5GHz",boost:"4.7GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:62,id:"IntelCorei514400T",nome:"Intel Core i5-14400T",nucleos:"10",threads:"16",base:"1.5GHz",boost:"4.5GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:71,id:"IntelCorei514500",nome:"Intel Core i5-14500",nucleos:"14",threads:"20",base:"2.6GHz",boost:"5.0GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:69,id:"IntelCorei514500T",nome:"Intel Core i5-14500T",nucleos:"14",threads:"20",base:"1.7GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:73,id:"IntelCorei514600",nome:"Intel Core i5-14600",nucleos:"14",threads:"20",base:"2.7GHz",boost:"5.2GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:72,id:"IntelCorei514600T",nome:"Intel Core i5-14600T",nucleos:"14",threads:"20",base:"1.8GHz",boost:"5.1GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:84,id:"IntelCorei714700",nome:"Intel Core i7-14700",nucleos:"20",threads:"28",base:"2.1GHz",boost:"5.4GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:84,id:"IntelCorei714700F",nome:"Intel Core i7-14700F",nucleos:"20",threads:"28",base:"2.1GHz",boost:"5.4GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:82,id:"IntelCorei714700T",nome:"Intel Core i7-14700T",nucleos:"20",threads:"28",base:"1.3GHz",boost:"5.2GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:94,id:"IntelCorei914900",nome:"Intel Core i9-14900",nucleos:"24",threads:"32",base:"2.0GHz",boost:"5.8GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:94,id:"IntelCorei914900F",nome:"Intel Core i9-14900F",nucleos:"24",threads:"32",base:"2.0GHz",boost:"5.8GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:98,id:"IntelCorei914900KS",nome:"Intel Core i9-14900KS",nucleos:"24",threads:"32",base:"3.2GHz",boost:"6.2GHz",tdp:"253W",socket:"LGA1700",ano:"2024"}
,{score:91,id:"IntelCorei914900T",nome:"Intel Core i9-14900T",nucleos:"24",threads:"32",base:"1.1GHz",boost:"5.5GHz",tdp:"65W",socket:"LGA1700",ano:"2024"}
,{score:73,id:"IntelCoreUltra5245K",nome:"Intel Core Ultra 5 processor 245K",nucleos:"14",threads:"14",base:"4.2GHz",boost:"5.2GHz",tdp:"125W",socket:"LGA1851",ano:"2024"}
,{score:73,id:"IntelCoreUltra5245KF",nome:"Intel Core Ultra 5 processor 245KF",nucleos:"14",threads:"14",base:"4.2GHz",boost:"5.2GHz",tdp:"125W",socket:"LGA1851",ano:"2024"}
,{score:85,id:"IntelCoreUltra7265K",nome:"Intel Core Ultra 7 processor 265K",nucleos:"20",threads:"20",base:"3.9GHz",boost:"5.5GHz",tdp:"125W",socket:"LGA1851",ano:"2024"}
,{score:85,id:"IntelCoreUltra7265KF",nome:"Intel Core Ultra 7 processor 265KF",nucleos:"20",threads:"20",base:"3.9GHz",boost:"5.5GHz",tdp:"125W",socket:"LGA1851",ano:"2024"}
,{score:93,id:"IntelCoreUltra9285K",nome:"Intel Core Ultra 9 processor 285K",nucleos:"24",threads:"24",base:"3.7GHz",boost:"5.7GHz",tdp:"125W",socket:"LGA1851",ano:"2024"}
,{score:42,id:"IntelProcessor300",nome:"Intel Processor 300",nucleos:"2",threads:"4",base:"3.9GHz",boost:"3.9GHz",tdp:"15W",socket:"BGA",ano:"2024"}
,{score:37,id:"IntelProcessor300T",nome:"Intel Processor 300T",nucleos:"2",threads:"4",base:"3.4GHz",boost:"3.4GHz",tdp:"15W",socket:"BGA",ano:"2024"}
,{score:45,id:"AMDRyzen57235HS",nome:"AMD Ryzen 5 7235HS",nucleos:"4",threads:"8",base:"3.2GHz",boost:"4.2GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:50,id:"AMDRyzen57533HS",nome:"AMD Ryzen 5 7533HS",nucleos:"6",threads:"12",base:"3.3GHz",boost:"4.4GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:55,id:"AMDRyzen77435HS",nome:"AMD Ryzen 7 7435HS",nucleos:"8",threads:"16",base:"3.1GHz",boost:"4.5GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:70,id:"AMDRyzen77840HX",nome:"AMD Ryzen 7 7840HX",nucleos:"12",threads:"24",base:"2.9GHz",boost:"5.1GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:80,id:"AMDRyzen97940HX",nome:"AMD Ryzen 9 7940HX",nucleos:"16",threads:"32",base:"2.4GHz",boost:"5.2GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:65,id:"AMDRyzenAI7PRO360",nome:"AMD Ryzen AI 7 PRO 360",nucleos:"8",threads:"16",base:"2.0GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:72,id:"AMDRyzenAI9365",nome:"AMD Ryzen AI 9 365",nucleos:"10",threads:"20",base:"2.0GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:80,id:"AMDRyzenAI9HX370",nome:"AMD Ryzen AI 9 HX 370",nucleos:"12",threads:"24",base:"2.0GHz",boost:"5.1GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:82,id:"AMDRyzenAI9HX375",nome:"AMD Ryzen AI 9 HX 375",nucleos:"12",threads:"24",base:"2.0GHz",boost:"5.1GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:80,id:"AMDRyzenAI9HXPRO370",nome:"AMD Ryzen AI 9 HX PRO 370",nucleos:"12",threads:"24",base:"2.0GHz",boost:"5.1GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:82,id:"AMDRyzenAI9HXPRO375",nome:"AMD Ryzen AI 9 HX PRO 375",nucleos:"12",threads:"24",base:"2.0GHz",boost:"5.1GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:70,id:"AppleA18Pro",nome:"Apple A18 Pro",nucleos:"6",threads:"6",base:"0.74GHz",boost:"4.04GHz",tdp:"N/A",socket:"Apple Silicon",ano:"2024"}
,{score:40,id:"IntelCore3100U",nome:"Intel Core 3 processor 100U",nucleos:"6",threads:"8",base:"1.2GHz",boost:"4.7GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:50,id:"IntelCore5120U",nome:"Intel Core 5 processor 120U",nucleos:"10",threads:"12",base:"1.4GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:55,id:"IntelCore5210H",nome:"Intel Core 5 processor 210H",nucleos:"8",threads:"12",base:"2.2GHz",boost:"4.8GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:62,id:"IntelCore5220H",nome:"Intel Core 5 processor 220H",nucleos:"12",threads:"16",base:"2.7GHz",boost:"4.9GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:58,id:"IntelCore7150U",nome:"Intel Core 7 processor 150U",nucleos:"10",threads:"12",base:"1.8GHz",boost:"5.4GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:68,id:"IntelCore7240H",nome:"Intel Core 7 processor 240H",nucleos:"10",threads:"16",base:"2.5GHz",boost:"5.2GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:75,id:"IntelCore7250H",nome:"Intel Core 7 processor 250H",nucleos:"14",threads:"20",base:"2.5GHz",boost:"5.4GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:85,id:"IntelCore9270H",nome:"Intel Core 9 processor 270H",nucleos:"14",threads:"20",base:"2.7GHz",boost:"5.8GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:58,id:"IntelCorei514450HX",nome:"Intel Core i5-14450HX",nucleos:"10",threads:"16",base:"2.4GHz",boost:"4.8GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:65,id:"IntelCorei514500HX",nome:"Intel Core i5-14500HX",nucleos:"14",threads:"20",base:"2.6GHz",boost:"4.9GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:75,id:"IntelCorei714650HX",nome:"Intel Core i7-14650HX",nucleos:"16",threads:"24",base:"2.2GHz",boost:"5.2GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:85,id:"IntelCorei714700HX",nome:"Intel Core i7-14700HX",nucleos:"20",threads:"28",base:"2.1GHz",boost:"5.5GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:95,id:"IntelCorei914900HX",nome:"Intel Core i9-14900HX",nucleos:"24",threads:"32",base:"2.2GHz",boost:"5.8GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:48,id:"IntelCoreUltra5226V",nome:"Intel Core Ultra 5 processor 226V",nucleos:"8",threads:"8",base:"2.1GHz",boost:"4.5GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:48,id:"IntelCoreUltra5228V",nome:"Intel Core Ultra 5 processor 228V",nucleos:"8",threads:"8",base:"2.1GHz",boost:"4.5GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:52,id:"IntelCoreUltra5236V",nome:"Intel Core Ultra 5 processor 236V",nucleos:"8",threads:"8",base:"2.1GHz",boost:"4.7GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:52,id:"IntelCoreUltra5238V",nome:"Intel Core Ultra 5 processor 238V",nucleos:"8",threads:"8",base:"2.1GHz",boost:"4.7GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:55,id:"IntelCoreUltra7256V",nome:"Intel Core Ultra 7 processor 256V",nucleos:"8",threads:"8",base:"2.2GHz",boost:"4.8GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:55,id:"IntelCoreUltra7258V",nome:"Intel Core Ultra 7 processor 258V",nucleos:"8",threads:"8",base:"2.2GHz",boost:"4.8GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:60,id:"IntelCoreUltra7266V",nome:"Intel Core Ultra 7 processor 266V",nucleos:"8",threads:"8",base:"2.2GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:60,id:"IntelCoreUltra7268V",nome:"Intel Core Ultra 7 processor 268V",nucleos:"8",threads:"8",base:"2.2GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:68,id:"IntelCoreUltra9288V",nome:"Intel Core Ultra 9 processor 288V",nucleos:"8",threads:"8",base:"3.3GHz",boost:"5.1GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:70,id:"SnapdragonXEliteX1E001DE",nome:"Snapdragon X Elite X1E-00-1DE",nucleos:"12",threads:"12",base:"3.4GHz",boost:"4.3GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:55,id:"SnapdragonXEliteX1E78100",nome:"Snapdragon X Elite X1E-78-100",nucleos:"12",threads:"12",base:"3.4GHz",boost:"3.4GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:62,id:"SnapdragonXEliteX1E80100",nome:"Snapdragon X Elite X1E-80-100",nucleos:"12",threads:"12",base:"3.4GHz",boost:"4.0GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:65,id:"SnapdragonXEliteX1E84100",nome:"Snapdragon X Elite X1E-84-100",nucleos:"12",threads:"12",base:"3.4GHz",boost:"4.2GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:42,id:"SnapdragonXPlusX1P42100",nome:"Snapdragon X Plus X1P-42-100",nucleos:"8",threads:"8",base:"3.2GHz",boost:"3.4GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:50,id:"SnapdragonXPlusX1P46100",nome:"Snapdragon X Plus X1P-46-100",nucleos:"8",threads:"8",base:"3.4GHz",boost:"4.0GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:48,id:"SnapdragonXPlusX1P64100",nome:"Snapdragon X Plus X1P-64-100",nucleos:"10",threads:"10",base:"3.4GHz",boost:"3.4GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}
,{score:55,id:"SnapdragonXPlusX1P66100",nome:"Snapdragon X Plus X1P-66-100",nucleos:"10",threads:"10",base:"3.4GHz",boost:"4.0GHz",tdp:"N/A",socket:"Mobile",ano:"2024"}

// === NEW 2025 CPUs (from cpuas-2025.md) ===
// Desktop
,{score:45,id:"AMDRyzen5750",nome:"AMD Ryzen 5 7500X3D",nucleos:"8",threads:"16",base:"2.3GHz",boost:"5.2GHz",tdp:"65W",socket:"AM5",ano:"2025"}
,{score:70,id:"AMDRyzen5560",nome:"AMD Ryzen 5 5600F",nucleos:"6",threads:"12",base:"3.4GHz",boost:"5.0GHz",tdp:"65W",socket:"AM4",ano:"2025"}
,{score:78,id:"AMDRyzen5740",nome:"AMD Ryzen 5 7400",nucleos:"8",threads:"16",base:"3.5GHz",boost:"5.2GHz",tdp:"65W",socket:"AM5",ano:"2025"}
,{score:85,id:"AMDRyzen7970",nome:"AMD Ryzen 7 9700F",nucleos:"16",threads:"32",base:"3.8GHz",boost:"5.4GHz",tdp:"65W",socket:"AM5",ano:"2025"}
,{score:85,id:"AMDRyzen5950",nome:"AMD Ryzen 5 9500F",nucleos:"16",threads:"32",base:"3.8GHz",boost:"5.4GHz",tdp:"65W",socket:"AM5",ano:"2025"}
,{score:68,id:"IntelCorei5110",nome:"Intel Core i5-110",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1200",ano:"2025"}
,{score:45,id:"AMDRyzen9H270",nome:"AMD Ryzen 9 H 270",nucleos:"16",threads:"32",base:"2.2GHz",boost:"5.0GHz",tdp:"45W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen7255",nome:"AMD Ryzen 7 255",nucleos:"8",threads:"16",base:"2.2GHz",boost:"5.0GHz",tdp:"45W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen7H255",nome:"AMD Ryzen 7 H 255",nucleos:"8",threads:"16",base:"2.2GHz",boost:"5.0GHz",tdp:"45W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen7H260",nome:"AMD Ryzen 7 H 260",nucleos:"8",threads:"16",base:"2.2GHz",boost:"5.0GHz",tdp:"45W",socket:"BGA",ano:"2025"}
,{score:70,id:"IntelCoreUltra3205",nome:"Intel Core Ultra 3 205",nucleos:"8",threads:"16",base:"2.5GHz",boost:"5.0GHz",tdp:"57W",socket:"BGA",ano:"2025"}
,{score:70,id:"AMDRyzen5550X3D",nome:"AMD Ryzen 5 5500X3D",nucleos:"6",threads:"12",base:"3.4GHz",boost:"5.0GHz",tdp:"105W",socket:"AM4",ano:"2025"}
,{score:70,id:"IntelCoreUltra5235A",nome:"Intel Core Ultra 5 235A",nucleos:"8",threads:"16",base:"2.5GHz",boost:"5.0GHz",tdp:"65W",socket:"BGA",ano:"2025"}
,{score:70,id:"IntelCoreUltra5235TA",nome:"Intel Core Ultra 5 235TA",nucleos:"8",threads:"16",base:"2.5GHz",boost:"5.0GHz",tdp:"65W",socket:"BGA",ano:"2025"}
,{score:72,id:"AMDRyzenThreadripper9960X",nome:"AMD Ryzen Threadripper 9960X",nucleos:"24",threads:"48",base:"3.5GHz",boost:"5.2GHz",tdp:"350W",socket:"sTR5",ano:"2025"}
,{score:72,id:"AMDRyzenThreadripper9970X",nome:"AMD Ryzen Threadripper 9970X",nucleos:"24",threads:"48",base:"3.5GHz",boost:"5.2GHz",tdp:"350W",socket:"sTR5",ano:"2025"}
,{score:72,id:"AMDRyzenThreadripper9980X",nome:"AMD Ryzen Threadripper 9980X",nucleos:"24",threads:"48",base:"3.5GHz",boost:"5.2GHz",tdp:"350W",socket:"sTR5",ano:"2025"}
,{score:68,id:"IntelCore5120",nome:"Intel Core 5 120",nucleos:"6",threads:"12",base:"3.2GHz",boost:"4.8GHz",tdp:"65W",socket:"LGA1700",ano:"2025"}
,{score:72,id:"AMDRyzenThreadripperPRO9955WX",nome:"AMD Ryzen Threadripper PRO 9955WX",nucleos:"64",threads:"128",base:"3.5GHz",boost:"5.2GHz",tdp:"350W",socket:"sTR5",ano:"2025"}
,{score:72,id:"AMDRyzenThreadripperPRO9945WX",nome:"AMD Ryzen Threadripper PRO 9945WX",nucleos:"64",threads:"128",base:"3.5GHz",boost:"5.2GHz",tdp:"350W",socket:"sTR5",ano:"2025"}
// Server
,{score:45,id:"EPYC9015",nome:"AMD EPYC Embedded 9015",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.8GHz",tdp:"125W",socket:"SPo5",ano:"2025"}
,{score:50,id:"EPYC9135",nome:"AMD EPYC Embedded 9135",nucleos:"24",threads:"48",base:"2.0GHz",boost:"3.9GHz",tdp:"200W",socket:"SPo5",ano:"2025"}
,{score:50,id:"EPYC9255",nome:"AMD EPYC Embedded 9255",nucleos:"24",threads:"48",base:"2.0GHz",boost:"3.9GHz",tdp:"200W",socket:"SPo5",ano:"2025"}
,{score:55,id:"EPYC9355",nome:"AMD EPYC Embedded 9355",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.1GHz",tdp:"280W",socket:"SPo5",ano:"2025"}
,{score:55,id:"EPYC9355P",nome:"AMD EPYC Embedded 9355P",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.1GHz",tdp:"280W",socket:"SPo5",ano:"2025"}
,{score:55,id:"EPYC9455P",nome:"AMD EPYC Embedded 9455P",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.1GHz",tdp:"300W",socket:"SPo5",ano:"2025"}
,{score:60,id:"EPYC9535",nome:"AMD EPYC Embedded 9535",nucleos:"48",threads:"96",base:"2.1GHz",boost:"4.1GHz",tdp:"300W",socket:"SPo5",ano:"2025"}
,{score:60,id:"EPYC9555",nome:"AMD EPYC Embedded 9555",nucleos:"48",threads:"96",base:"2.2GHz",boost:"4.2GHz",tdp:"360W",socket:"SPo5",ano:"2025"}
,{score:60,id:"EPYC9555P",nome:"AMD EPYC Embedded 9555P",nucleos:"48",threads:"96",base:"2.2GHz",boost:"4.2GHz",tdp:"360W",socket:"SPo5",ano:"2025"}
,{score:60,id:"EPYC9655",nome:"AMD EPYC Embedded 9655",nucleos:"48",threads:"96",base:"2.2GHz",boost:"4.3GHz",tdp:"400W",socket:"SPo5",ano:"2025"}
,{score:60,id:"EPYC9655P",nome:"AMD EPYC Embedded 9655P",nucleos:"48",threads:"96",base:"2.2GHz",boost:"4.3GHz",tdp:"400W",socket:"SPo5",ano:"2025"}
,{score:65,id:"EPYC9745",nome:"AMD EPYC Embedded 9745",nucleos:"64",threads:"128",base:"2.2GHz",boost:"4.3GHz",tdp:"400W",socket:"SPo5",ano:"2025"}
,{score:65,id:"EPYC9755",nome:"AMD EPYC Embedded 9755",nucleos:"64",threads:"128",base:"2.3GHz",boost:"4.5GHz",tdp:"500W",socket:"SPo5",ano:"2025"}
,{score:65,id:"EPYC9845",nome:"AMD EPYC Embedded 9845",nucleos:"64",threads:"128",base:"2.2GHz",boost:"4.3GHz",tdp:"390W",socket:"SPo5",ano:"2025"}
,{score:70,id:"EPYC9965",nome:"AMD EPYC Embedded 9965",nucleos:"64",threads:"128",base:"2.3GHz",boost:"4.5GHz",tdp:"500W",socket:"SPo5",ano:"2025"}
,{score:45,id:"EPYC4245P",nome:"AMD EPYC 4245P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.6GHz",tdp:"65W",socket:"SP6",ano:"2025"}
,{score:45,id:"EPYC4345P",nome:"AMD EPYC 4345P",nucleos:"12",threads:"24",base:"1.9GHz",boost:"3.6GHz",tdp:"65W",socket:"SP6",ano:"2025"}
,{score:45,id:"EPYC4465P",nome:"AMD EPYC 4465P",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.6GHz",tdp:"65W",socket:"SP6",ano:"2025"}
,{score:45,id:"EPYC4545P",nome:"AMD EPYC 4545P",nucleos:"24",threads:"48",base:"1.9GHz",boost:"3.6GHz",tdp:"65W",socket:"SP6",ano:"2025"}
,{score:45,id:"EPYC4565P",nome:"AMD EPYC 4565P",nucleos:"24",threads:"48",base:"2.0GHz",boost:"3.8GHz",tdp:"170W",socket:"SP6",ano:"2025"}
,{score:45,id:"EPYC4585PX",nome:"AMD EPYC 4585PX",nucleos:"24",threads:"48",base:"2.0GHz",boost:"3.8GHz",tdp:"170W",socket:"SP6",ano:"2025"}
,{score:58,id:"Xeon6732P",nome:"Intel Xeon 6732P",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.2GHz",tdp:"350W",socket:"LGA4677",ano:"2025"}
,{score:58,id:"Xeon6774P",nome:"Intel Xeon 6774P",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.2GHz",tdp:"350W",socket:"LGA4677",ano:"2025"}
,{score:58,id:"Xeon6776P",nome:"Intel Xeon 6776P",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.2GHz",tdp:"350W",socket:"LGA4677",ano:"2025"}
,{score:65,id:"Xeon6962P",nome:"Intel Xeon 6962P",nucleos:"64",threads:"128",base:"2.3GHz",boost:"4.5GHz",tdp:"500W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6518PB",nome:"Intel Xeon 6518P-B",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.8GHz",tdp:"150W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6544PB",nome:"Intel Xeon 6544P-B",nucleos:"16",threads:"32",base:"2.0GHz",boost:"3.8GHz",tdp:"170W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6548PB",nome:"Intel Xeon 6548P-B",nucleos:"16",threads:"32",base:"2.0GHz",boost:"3.9GHz",tdp:"195W",socket:"LGA4677",ano:"2025"}
,{score:58,id:"Xeon6718PB",nome:"Intel Xeon 6718P-B",nucleos:"32",threads:"64",base:"2.0GHz",boost:"4.0GHz",tdp:"235W",socket:"LGA4677",ano:"2025"}
,{score:58,id:"Xeon6756PB",nome:"Intel Xeon 6756P-B",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.2GHz",tdp:"325W",socket:"LGA4677",ano:"2025"}
,{score:58,id:"Xeon6766PB",nome:"Intel Xeon 6766P-B",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.1GHz",tdp:"305W",socket:"LGA4677",ano:"2025"}
,{score:58,id:"Xeon6768PB",nome:"Intel Xeon 6768P-B",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.2GHz",tdp:"325W",socket:"LGA4677",ano:"2025"}
,{score:58,id:"Xeon6776PB",nome:"Intel Xeon 6776P-B",nucleos:"32",threads:"64",base:"2.1GHz",boost:"4.2GHz",tdp:"325W",socket:"LGA4677",ano:"2025"}
,{score:42,id:"Xeon6315P",nome:"Intel Xeon 6315P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.6GHz",tdp:"55W",socket:"LGA4677",ano:"2025"}
,{score:42,id:"Xeon6325P",nome:"Intel Xeon 6325P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.6GHz",tdp:"55W",socket:"LGA4677",ano:"2025"}
,{score:42,id:"Xeon6333P",nome:"Intel Xeon 6333P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.6GHz",tdp:"65W",socket:"LGA4677",ano:"2025"}
,{score:42,id:"Xeon6337P",nome:"Intel Xeon 6337P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.7GHz",tdp:"80W",socket:"LGA4677",ano:"2025"}
,{score:42,id:"Xeon6349P",nome:"Intel Xeon 6349P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.7GHz",tdp:"95W",socket:"LGA4677",ano:"2025"}
,{score:42,id:"Xeon6353P",nome:"Intel Xeon 6353P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.6GHz",tdp:"65W",socket:"LGA4677",ano:"2025"}
,{score:42,id:"Xeon6357P",nome:"Intel Xeon 6357P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.7GHz",tdp:"80W",socket:"LGA4677",ano:"2025"}
,{score:42,id:"Xeon6369P",nome:"Intel Xeon 6369P",nucleos:"8",threads:"16",base:"1.9GHz",boost:"3.7GHz",tdp:"95W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6503PB",nome:"Intel Xeon 6503P-B",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.7GHz",tdp:"110W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6505P",nome:"Intel Xeon 6505P",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.8GHz",tdp:"150W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6507P",nome:"Intel Xeon 6507P",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.8GHz",tdp:"150W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6511P",nome:"Intel Xeon 6511P",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.8GHz",tdp:"150W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6513PB",nome:"Intel Xeon 6513P-B",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.8GHz",tdp:"130W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6515P",nome:"Intel Xeon 6515P",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.8GHz",tdp:"150W",socket:"LGA4677",ano:"2025"}
,{score:50,id:"Xeon6516PB",nome:"Intel Xeon 6516P-B",nucleos:"16",threads:"32",base:"1.9GHz",boost:"3.8GHz",tdp:"145W",socket:"LGA4677",ano:"2025"}
,{score:58,id:"Xeon6725P",nome:"Intel Xeon 6725P",nucleos:"32",threads:"64",base:"2.0GHz",boost:"4.0GHz",tdp:"235W",socket:"LGA4677",ano:"2025"}
,{score:65,id:"Xeon6978P",nome:"Intel Xeon 6978P",nucleos:"64",threads:"128",base:"2.3GHz",boost:"4.5GHz",tdp:"500W",socket:"LGA4677",ano:"2025"}
// Laptops
,{score:60,id:"AMDRyzenAI5PRO440",nome:"AMD Ryzen AI 5 PRO 440",nucleos:"8",threads:"16",base:"2.1GHz",boost:"4.8GHz",tdp:"28W",socket:"BGA",ano:"2025"}
,{score:68,id:"AMDRyzenAI7445",nome:"AMD Ryzen AI 7 445",nucleos:"12",threads:"24",base:"2.1GHz",boost:"4.8GHz",tdp:"28W",socket:"BGA",ano:"2025"}
,{score:75,id:"AMDRyzenAI9PRO465",nome:"AMD Ryzen AI 9 PRO 465",nucleos:"16",threads:"32",base:"2.1GHz",boost:"4.8GHz",tdp:"28W",socket:"BGA",ano:"2025"}
,{score:60,id:"AMDRyzenAIMax388",nome:"AMD Ryzen AI Max+ 388",nucleos:"16",threads:"32",base:"2.3GHz",boost:"5.0GHz",tdp:"55W",socket:"BGA",ano:"2025"}
,{score:75,id:"AMDRyzenAIMax392",nome:"AMD Ryzen AI Max+ 392",nucleos:"16",threads:"32",base:"2.3GHz",boost:"5.0GHz",tdp:"55W",socket:"BGA",ano:"2025"}
,{score:75,id:"AMDRyzenAIMaxPRO490",nome:"AMD Ryzen AI Max PRO 490",nucleos:"16",threads:"32",base:"2.3GHz",boost:"5.2GHz",tdp:"N/A",socket:"BGA",ano:"2025"}
,{score:75,id:"AMDRyzenAIMaxPRO495",nome:"AMD Ryzen AI Max+ PRO 495",nucleos:"16",threads:"32",base:"2.3GHz",boost:"5.0GHz",tdp:"55W",socket:"BGA",ano:"2025"}




,{score:30,id:"AthlonGold20",nome:"AMD Athlon Gold 20",nucleos:"2",threads:"4",base:"2.0GHz",boost:"3.5GHz",tdp:"15W",socket:"BGA",ano:"2025"}
,{score:30,id:"AthlonSilver10",nome:"AMD Athlon Silver 10",nucleos:"2",threads:"4",base:"2.0GHz",boost:"3.5GHz",tdp:"15W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen330",nome:"AMD Ryzen 3 30",nucleos:"4",threads:"8",base:"2.1GHz",boost:"4.7GHz",tdp:"15W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen540",nome:"AMD Ryzen 5 40",nucleos:"6",threads:"12",base:"2.1GHz",boost:"4.7GHz",tdp:"15W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen3110",nome:"AMD Ryzen 3 110",nucleos:"4",threads:"8",base:"2.1GHz",boost:"4.8GHz",tdp:"28W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen5130",nome:"AMD Ryzen 5 130",nucleos:"6",threads:"12",base:"2.1GHz",boost:"4.8GHz",tdp:"28W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen5150",nome:"AMD Ryzen 5 150",nucleos:"6",threads:"12",base:"2.2GHz",boost:"4.8GHz",tdp:"35W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen7160",nome:"AMD Ryzen 7 160",nucleos:"8",threads:"16",base:"2.1GHz",boost:"4.8GHz",tdp:"28W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen7170",nome:"AMD Ryzen 7 170",nucleos:"8",threads:"16",base:"2.2GHz",boost:"4.8GHz",tdp:"35W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen78745HX",nome:"AMD Ryzen 7 8745HX",nucleos:"8",threads:"16",base:"2.3GHz",boost:"5.0GHz",tdp:"55W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen78840HX",nome:"AMD Ryzen 7 8840HX",nucleos:"8",threads:"16",base:"2.3GHz",boost:"5.0GHz",tdp:"55W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen98940HX",nome:"AMD Ryzen 9 8940HX",nucleos:"16",threads:"32",base:"2.3GHz",boost:"5.0GHz",tdp:"55W",socket:"BGA",ano:"2025"}
,{score:45,id:"AMDRyzen98945HX",nome:"AMD Ryzen 9 8945HX",nucleos:"16",threads:"32",base:"2.3GHz",boost:"5.0GHz",tdp:"55W",socket:"BGA",ano:"2025"}
,{score:25,id:"IntelAtomx7433FE",nome:"Intel Atom x7433FE",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.5GHz",tdp:"9W",socket:"BGA",ano:"2025"}
,{score:25,id:"IntelAtomx7835FE",nome:"Intel Atom x7835FE",nucleos:"4",threads:"4",base:"2.0GHz",boost:"3.5GHz",tdp:"12W",socket:"BGA",ano:"2025"}
,{score:50,id:"Xeon6532PB",nome:"Intel Xeon 6532P-B",nucleos:"16",threads:"32",base:"2.0GHz",boost:"3.9GHz",tdp:"205W",socket:"LGA4677",ano:"2025"}

,{score:40,id:"IntelCoreUltra5235UA",nome:"Intel Core Ultra 5 235UA",nucleos:"8",threads:"16",base:"2.5GHz",boost:"5.0GHz",tdp:"57W",socket:"BGA",ano:"2025"}



,{score:45,id:"MediatekKompanio910",nome:"Mediatek Kompanio Ultra 910",nucleos:"8",threads:"8",base:"2.0GHz",boost:"3.5GHz",tdp:"N/A",socket:"BGA",ano:"2025"}
,{score:45,id:"DGXSparkGB10",nome:"DGX Spark (MediaTek AHJ11488B)",nucleos:"16",threads:"32",base:"2.5GHz",boost:"5.0GHz",tdp:"140W",socket:"BGA",ano:"2025"}
,{score:45,id:"GB10MediaTek",nome:"GB10 (MediaTek AHJ11488B)",nucleos:"16",threads:"32",base:"2.5GHz",boost:"5.0GHz",tdp:"140W",socket:"BGA",ano:"2025"}

// === NEW 2026 CPUs (from CPUs_2026_TechnicalCity.md) ===
// Server
,{score:45,id:"EPYC9016",nome:"AMD EPYC 9016",nucleos:"16",threads:"32",base:"3.0GHz",boost:"4.5GHz",tdp:"130W",socket:"SPo5",ano:"2026"}
,{score:50,id:"EPYC9116",nome:"AMD EPYC 9116",nucleos:"16",threads:"32",base:"3.2GHz",boost:"4.7GHz",tdp:"160W",socket:"SPo5",ano:"2026"}
,{score:55,id:"EPYC9176F",nome:"AMD EPYC 9176F",nucleos:"24",threads:"48",base:"3.0GHz",boost:"4.3GHz",tdp:"200W",socket:"SPo5",ano:"2026"}
,{score:53,id:"EPYC9256",nome:"AMD EPYC 9256",nucleos:"24",threads:"48",base:"3.2GHz",boost:"4.5GHz",tdp:"190W",socket:"SPo5",ano:"2026"}
,{score:60,id:"EPYC9276F",nome:"AMD EPYC 9276F",nucleos:"32",threads:"64",base:"3.0GHz",boost:"4.3GHz",tdp:"230W",socket:"SPo5",ano:"2026"}
,{score:54,id:"EPYC9336",nome:"AMD EPYC 9336",nucleos:"32",threads:"64",base:"3.3GHz",boost:"4.5GHz",tdp:"195W",socket:"SPo5",ano:"2026"}
,{score:60,id:"EPYC9356",nome:"AMD EPYC 9356",nucleos:"32",threads:"64",base:"3.5GHz",boost:"4.7GHz",tdp:"250W",socket:"SPo5",ano:"2026"}
,{score:60,id:"EPYC9356P",nome:"AMD EPYC 9356P",nucleos:"32",threads:"64",base:"3.5GHz",boost:"4.7GHz",tdp:"250W",socket:"SPo5",ano:"2026"}
,{score:65,id:"EPYC9376F",nome:"AMD EPYC 9376F",nucleos:"48",threads:"96",base:"3.0GHz",boost:"4.3GHz",tdp:"285W",socket:"SPo5",ano:"2026"}
,{score:65,id:"EPYC9456",nome:"AMD EPYC 9456",nucleos:"48",threads:"96",base:"3.2GHz",boost:"4.5GHz",tdp:"265W",socket:"SPo5",ano:"2026"}
,{score:65,id:"EPYC9456P",nome:"AMD EPYC 9456P",nucleos:"48",threads:"96",base:"3.2GHz",boost:"4.5GHz",tdp:"265W",socket:"SPo5",ano:"2026"}
,{score:70,id:"EPYC9476F",nome:"AMD EPYC 9476F",nucleos:"64",threads:"128",base:"3.0GHz",boost:"4.3GHz",tdp:"330W",socket:"SPo5",ano:"2026"}
,{score:58,id:"EPYC9526",nome:"AMD EPYC 9526",nucleos:"48",threads:"96",base:"3.3GHz",boost:"4.5GHz",tdp:"220W",socket:"SPo5",ano:"2026"}
// Desktop
,{score:60,id:"RyzenAI_X168",nome:"AMD Ryzen AI Embedded X168",nucleos:"12",threads:"12",base:"3.5GHz",boost:"5.0GHz",tdp:"55W",socket:"AM5",ano:"2026"}
,{score:65,id:"RyzenAI_X188",nome:"AMD Ryzen AI Embedded X188",nucleos:"14",threads:"14",base:"3.7GHz",boost:"5.2GHz",tdp:"55W",socket:"AM5",ano:"2026"}
,{score:65,id:"RyzenAI_X188i",nome:"AMD Ryzen AI Embedded X188i",nucleos:"14",threads:"14",base:"3.7GHz",boost:"5.2GHz",tdp:"55W",socket:"AM5",ano:"2026"}
,{score:75,id:"Ryzen7PRO9755",nome:"AMD Ryzen 7 PRO 9755",nucleos:"12",threads:"24",base:"3.8GHz",boost:"5.4GHz",tdp:"120W",socket:"AM5",ano:"2026"}
,{score:95,id:"Ryzen9PRO9965X3D",nome:"AMD Ryzen 9 PRO 9965X3D",nucleos:"16",threads:"32",base:"4.0GHz",boost:"5.6GHz",tdp:"170W",socket:"AM5",ano:"2026"}

,{score:55,id:"RyzenAI5PRO435G",nome:"AMD Ryzen AI 5 PRO 435G",nucleos:"12",threads:"24",base:"3.5GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2026"}
,{score:45,id:"RyzenAI5PRO435GE",nome:"AMD Ryzen AI 5 PRO 435GE",nucleos:"12",threads:"24",base:"3.5GHz",boost:"5.0GHz",tdp:"35W",socket:"AM5",ano:"2026"}
,{score:55,id:"RyzenAI5PRO440G",nome:"AMD Ryzen AI 5 PRO 440G",nucleos:"12",threads:"24",base:"3.7GHz",boost:"5.2GHz",tdp:"65W",socket:"AM5",ano:"2026"}
,{score:45,id:"RyzenAI5PRO440GE",nome:"AMD Ryzen AI 5 PRO 440GE",nucleos:"12",threads:"24",base:"3.7GHz",boost:"5.2GHz",tdp:"35W",socket:"AM5",ano:"2026"}
,{score:65,id:"RyzenAI7PRO450G",nome:"AMD Ryzen AI 7 PRO 450G",nucleos:"14",threads:"28",base:"3.8GHz",boost:"5.4GHz",tdp:"65W",socket:"AM5",ano:"2026"}
,{score:55,id:"RyzenAI7PRO450GE",nome:"AMD Ryzen AI 7 PRO 450GE",nucleos:"14",threads:"28",base:"3.8GHz",boost:"5.4GHz",tdp:"35W",socket:"AM5",ano:"2026"}
,{score:50,id:"RyzenAI5435G",nome:"AMD Ryzen AI 5 435G",nucleos:"12",threads:"24",base:"3.5GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2026"}
,{score:40,id:"RyzenAI5435GE",nome:"AMD Ryzen AI 5 435GE",nucleos:"12",threads:"24",base:"3.5GHz",boost:"5.0GHz",tdp:"35W",socket:"AM5",ano:"2026"}
,{score:50,id:"RyzenAI5440G",nome:"AMD Ryzen AI 5 440G",nucleos:"12",threads:"24",base:"3.7GHz",boost:"5.2GHz",tdp:"65W",socket:"AM5",ano:"2026"}
,{score:40,id:"RyzenAI5440GE",nome:"AMD Ryzen AI 5 440GE",nucleos:"12",threads:"24",base:"3.7GHz",boost:"5.2GHz",tdp:"35W",socket:"AM5",ano:"2026"}
,{score:60,id:"RyzenAI7450G",nome:"AMD Ryzen AI 7 450G",nucleos:"14",threads:"28",base:"3.8GHz",boost:"5.4GHz",tdp:"65W",socket:"AM5",ano:"2026"}
,{score:50,id:"RyzenAI7450GE",nome:"AMD Ryzen AI 7 450GE",nucleos:"14",threads:"28",base:"3.8GHz",boost:"5.4GHz",tdp:"35W",socket:"AM5",ano:"2026"}
// Notebook
,{score:40,id:"Ryzen5439",nome:"AMD Ryzen 5 439",nucleos:"8",threads:"8",base:"3.2GHz",boost:"4.8GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:45,id:"Ryzen7449",nome:"AMD Ryzen 7 449",nucleos:"10",threads:"10",base:"3.4GHz",boost:"5.0GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"Core7_230H",nome:"Intel Core 7 230H",nucleos:"8",threads:"12",base:"2.5GHz",boost:"5.2GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:50,id:"Core5_205H",nome:"Intel Core 5 205H",nucleos:"8",threads:"12",base:"2.3GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:25,id:"Ryzen3_3100U",nome:"AMD Ryzen 3 3100U",nucleos:"2",threads:"4",base:"2.5GHz",boost:"3.5GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:35,id:"Ryzen5_3501U",nome:"AMD Ryzen 5 3501U",nucleos:"4",threads:"8",base:"2.0GHz",boost:"3.8GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:40,id:"Ryzen5_125",nome:"AMD Ryzen 5 125",nucleos:"6",threads:"8",base:"2.5GHz",boost:"4.5GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:40,id:"Ryzen5_216",nome:"AMD Ryzen 5 216",nucleos:"8",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:42,id:"Ryzen5_217",nome:"AMD Ryzen 5 217",nucleos:"8",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:40,id:"Ryzen5_224",nome:"AMD Ryzen 5 224",nucleos:"8",threads:"8",base:"3.2GHz",boost:"4.8GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:40,id:"Ryzen5_225",nome:"AMD Ryzen 5 225",nucleos:"8",threads:"8",base:"3.2GHz",boost:"4.8GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:55,id:"Ryzen7_155",nome:"AMD Ryzen 7 155",nucleos:"8",threads:"16",base:"3.5GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:60,id:"Ryzen7_165",nome:"AMD Ryzen 7 165",nucleos:"10",threads:"16",base:"3.6GHz",boost:"5.2GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:65,id:"Ryzen7_249",nome:"AMD Ryzen 7 249",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.4GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:65,id:"Ryzen7_253",nome:"AMD Ryzen 7 253",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.4GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:70,id:"Ryzen9_180",nome:"AMD Ryzen 9 180",nucleos:"12",threads:"24",base:"3.8GHz",boost:"5.4GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:45,id:"RyzenAI_MaxPRO490",nome:"AMD Ryzen AI Max PRO 490",nucleos:"16",threads:"16",base:"3.5GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_MaxPRO495",nome:"AMD Ryzen AI Max+ PRO 495",nucleos:"16",threads:"16",base:"3.7GHz",boost:"5.2GHz",tdp:"55W",socket:"Mobile",ano:"2026"}
,{score:35,id:"Core3_304",nome:"Intel Core 3 304",nucleos:"4",threads:"6",base:"1.0GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:35,id:"Core3_305",nome:"Intel Core 3 305",nucleos:"4",threads:"6",base:"1.0GHz",boost:"4.5GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:45,id:"Core5_315",nome:"Intel Core 5 315",nucleos:"6",threads:"8",base:"1.2GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:45,id:"Core5_320",nome:"Intel Core 5 320",nucleos:"6",threads:"8",base:"1.2GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:45,id:"Core5_330",nome:"Intel Core 5 330",nucleos:"6",threads:"8",base:"1.2GHz",boost:"4.7GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:55,id:"Core7_350",nome:"Intel Core 7 350",nucleos:"8",threads:"12",base:"1.5GHz",boost:"5.2GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:55,id:"Core7_360",nome:"Intel Core 7 360",nucleos:"8",threads:"12",base:"1.5GHz",boost:"5.2GHz",tdp:"15W",socket:"Mobile",ano:"2026"}
,{score:75,id:"CoreUltraX9_378H",nome:"Intel Core Ultra X9 378H",nucleos:"16",threads:"24",base:"2.5GHz",boost:"5.5GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:55,id:"Core7_245HX",nome:"Intel Core 7 245HX",nucleos:"8",threads:"12",base:"2.8GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:80,id:"CoreUltra7_251HX",nome:"Intel Core Ultra 7 251HX",nucleos:"12",threads:"20",base:"3.0GHz",boost:"5.4GHz",tdp:"160W",socket:"Mobile",ano:"2026"}
,{score:70,id:"CoreUltra7_270HX",nome:"Intel Core Ultra 7 270HX Plus",nucleos:"12",threads:"20",base:"3.2GHz",boost:"5.5GHz",tdp:"55W",socket:"Mobile",ano:"2026"}
,{score:75,id:"CoreUltra9_290HX",nome:"Intel Core Ultra 9 290HX Plus",nucleos:"14",threads:"24",base:"3.4GHz",boost:"5.6GHz",tdp:"55W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_P132",nome:"AMD Ryzen AI Embedded P132",nucleos:"8",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_P132i",nome:"AMD Ryzen AI Embedded P132i",nucleos:"8",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_P164",nome:"AMD Ryzen AI Embedded P164",nucleos:"10",threads:"10",base:"3.2GHz",boost:"4.9GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_P164i",nome:"AMD Ryzen AI Embedded P164i",nucleos:"10",threads:"10",base:"3.2GHz",boost:"4.9GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_P174",nome:"AMD Ryzen AI Embedded P174",nucleos:"10",threads:"10",base:"3.2GHz",boost:"4.9GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_P174i",nome:"AMD Ryzen AI Embedded P174i",nucleos:"10",threads:"10",base:"3.2GHz",boost:"4.9GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_P185",nome:"AMD Ryzen AI Embedded P185",nucleos:"12",threads:"12",base:"3.4GHz",boost:"5.1GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI_P185i",nome:"AMD Ryzen AI Embedded P185i",nucleos:"12",threads:"12",base:"3.4GHz",boost:"5.1GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:58,id:"RyzenAI_Max388",nome:"AMD Ryzen AI Max+ 388",nucleos:"14",threads:"14",base:"3.5GHz",boost:"5.2GHz",tdp:"55W",socket:"Mobile",ano:"2026"}
,{score:70,id:"RyzenAI_Max392",nome:"AMD Ryzen AI Max+ 392",nucleos:"16",threads:"16",base:"3.7GHz",boost:"5.4GHz",tdp:"55W",socket:"Mobile",ano:"2026"}
,{score:45,id:"RyzenAI5_430",nome:"AMD Ryzen AI 5 430",nucleos:"10",threads:"10",base:"3.2GHz",boost:"4.8GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:45,id:"RyzenAI5_435",nome:"AMD Ryzen AI 5 435",nucleos:"10",threads:"10",base:"3.2GHz",boost:"4.8GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:45,id:"RyzenAI5PRO435",nome:"AMD Ryzen AI 5 PRO 435",nucleos:"10",threads:"10",base:"3.2GHz",boost:"4.8GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:48,id:"RyzenAI5PRO440",nome:"AMD Ryzen AI 5 PRO 440",nucleos:"12",threads:"12",base:"3.4GHz",boost:"5.0GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI7_445",nome:"AMD Ryzen AI 7 445",nucleos:"12",threads:"12",base:"3.4GHz",boost:"5.0GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI7_450",nome:"AMD Ryzen AI 7 450",nucleos:"12",threads:"12",base:"3.4GHz",boost:"5.0GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI7PRO450",nome:"AMD Ryzen AI 7 PRO 450",nucleos:"12",threads:"12",base:"3.4GHz",boost:"5.0GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI9HXPRO470",nome:"AMD Ryzen AI 9 HX PRO 470",nucleos:"14",threads:"14",base:"3.6GHz",boost:"5.2GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI9HXPRO475",nome:"AMD Ryzen AI 9 HX PRO 475",nucleos:"14",threads:"14",base:"3.6GHz",boost:"5.2GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:52,id:"RyzenAI9PRO465",nome:"AMD Ryzen AI 9 PRO 465",nucleos:"14",threads:"14",base:"3.5GHz",boost:"5.1GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:50,id:"RyzenAI9_465",nome:"AMD Ryzen AI 9 465",nucleos:"14",threads:"14",base:"3.5GHz",boost:"5.1GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI9HX470",nome:"AMD Ryzen AI 9 HX 470",nucleos:"14",threads:"14",base:"3.6GHz",boost:"5.2GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
,{score:55,id:"RyzenAI9HX475",nome:"AMD Ryzen AI 9 HX 475",nucleos:"14",threads:"14",base:"3.6GHz",boost:"5.2GHz",tdp:"28W",socket:"Mobile",ano:"2026"}
// Desktop Arrow Lake
,{score:65,id:"CoreUltra5_250KPlus",nome:"Intel Core Ultra 5 250K Plus",nucleos:"8",threads:"12",base:"3.5GHz",boost:"5.2GHz",tdp:"125W",socket:"LGA1851",ano:"2026"}
,{score:65,id:"CoreUltra5_250KFPlus",nome:"Intel Core Ultra 5 250KF Plus",nucleos:"8",threads:"12",base:"3.5GHz",boost:"5.2GHz",tdp:"125W",socket:"LGA1851",ano:"2026"}
,{score:75,id:"CoreUltra7_270KPlus",nome:"Intel Core Ultra 7 270K Plus",nucleos:"12",threads:"20",base:"3.8GHz",boost:"5.5GHz",tdp:"125W",socket:"LGA1851",ano:"2026"}
// Desktop Bartlett Lake
,{score:65,id:"Core5_223PQE",nome:"Intel Core 5 223PQE",nucleos:"8",threads:"12",base:"3.5GHz",boost:"5.2GHz",tdp:"125W",socket:"LGA1851",ano:"2026"}
,{score:70,id:"Core7_253PQE",nome:"Intel Core 7 253PQE",nucleos:"10",threads:"16",base:"3.7GHz",boost:"5.4GHz",tdp:"125W",socket:"LGA1851",ano:"2026"}
,{score:70,id:"Core9_273PQE",nome:"Intel Core 9 273PQE",nucleos:"12",threads:"20",base:"3.8GHz",boost:"5.5GHz",tdp:"125W",socket:"LGA1851",ano:"2026"}
// Desktop Granite Ridge
,{score:95,id:"Ryzen7_9850X3D",nome:"AMD Ryzen 7 9850X3D",nucleos:"12",threads:"24",base:"4.7GHz",boost:"5.6GHz",tdp:"120W",socket:"AM5",ano:"2026"}
// Desktop Vermeer/Raphael
,{score:80,id:"Ryzen7_7700X3D",nome:"AMD Ryzen 7 7700X3D",nucleos:"8",threads:"16",base:"4.5GHz",boost:"5.4GHz",tdp:"120W",socket:"AM4",ano:"2026"}
,{score:85,id:"Ryzen7_5800X3D",nome:"AMD Ryzen 7 5800X3D AM4 10th Anniversary Edition",nucleos:"8",threads:"16",base:"3.4GHz",boost:"4.5GHz",tdp:"105W",socket:"AM4",ano:"2026"}
// Notebook Panther Lake
,{score:50,id:"CoreUltra5_322",nome:"Intel Core Ultra 5 322",nucleos:"8",threads:"12",base:"2.0GHz",boost:"5.0GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:50,id:"CoreUltra5_325",nome:"Intel Core Ultra 5 325",nucleos:"8",threads:"12",base:"2.0GHz",boost:"5.0GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:50,id:"CoreUltra5_332",nome:"Intel Core Ultra 5 332",nucleos:"8",threads:"12",base:"2.0GHz",boost:"5.0GHz",tdp:"N/A",socket:"Mobile",ano:"2026"}
,{score:50,id:"CoreUltra5_335",nome:"Intel Core Ultra 5 335",nucleos:"8",threads:"12",base:"2.0GHz",boost:"5.0GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:50,id:"CoreUltra5_336H",nome:"Intel Core Ultra 5 336H",nucleos:"8",threads:"12",base:"2.0GHz",boost:"5.0GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:50,id:"CoreUltra5_338H",nome:"Intel Core Ultra 5 338H",nucleos:"8",threads:"12",base:"2.0GHz",boost:"5.0GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:55,id:"CoreUltra7_355",nome:"Intel Core Ultra 7 355",nucleos:"10",threads:"16",base:"2.2GHz",boost:"5.2GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:55,id:"CoreUltra7_356H",nome:"Intel Core Ultra 7 356H",nucleos:"10",threads:"16",base:"2.2GHz",boost:"5.2GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:55,id:"CoreUltra7_365",nome:"Intel Core Ultra 7 365",nucleos:"10",threads:"16",base:"2.2GHz",boost:"5.2GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:55,id:"CoreUltra7_366H",nome:"Intel Core Ultra 7 366H",nucleos:"10",threads:"16",base:"2.2GHz",boost:"5.2GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:65,id:"CoreUltra9_386H",nome:"Intel Core Ultra 9 386H",nucleos:"12",threads:"20",base:"2.5GHz",boost:"5.5GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:60,id:"CoreUltraX7_358H",nome:"Intel Core Ultra X7 358H",nucleos:"12",threads:"20",base:"2.3GHz",boost:"5.3GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:60,id:"CoreUltraX7_368H",nome:"Intel Core Ultra X7 368H",nucleos:"12",threads:"20",base:"2.3GHz",boost:"5.3GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
,{score:65,id:"CoreUltraX9_388H",nome:"Intel Core Ultra X9 388H",nucleos:"14",threads:"24",base:"2.5GHz",boost:"5.5GHz",tdp:"25W",socket:"Mobile",ano:"2026"}
// Apple Silicon
,{score:95,id:"M5Max",nome:"Apple M5 Max",nucleos:"20",threads:"20",base:"N/A",boost:"N/A",tdp:"N/A",socket:"SoC",ano:"2026"}
,{score:85,id:"M5Pro15C",nome:"Apple M5 Pro 15-Core",nucleos:"15",threads:"15",base:"N/A",boost:"N/A",tdp:"N/A",socket:"SoC",ano:"2026"}
,{score:88,id:"M5Pro18C",nome:"Apple M5 Pro 18-Core",nucleos:"18",threads:"18",base:"N/A",boost:"N/A",tdp:"N/A",socket:"SoC",ano:"2026"}
// Server Granite Rapids
,{score:55,id:"Xeon634",nome:"Intel Xeon 634",nucleos:"8",threads:"16",base:"3.0GHz",boost:"4.5GHz",tdp:"150W",socket:"LGA4677",ano:"2026"}
,{score:60,id:"Xeon636",nome:"Intel Xeon 636",nucleos:"10",threads:"20",base:"3.2GHz",boost:"4.7GHz",tdp:"170W",socket:"LGA4677",ano:"2026"}
,{score:62,id:"Xeon638",nome:"Intel Xeon 638",nucleos:"12",threads:"24",base:"3.3GHz",boost:"4.8GHz",tdp:"180W",socket:"LGA4677",ano:"2026"}
,{score:65,id:"Xeon654",nome:"Intel Xeon 654",nucleos:"14",threads:"28",base:"3.5GHz",boost:"5.0GHz",tdp:"200W",socket:"LGA4677",ano:"2026"}
,{score:68,id:"Xeon656",nome:"Intel Xeon 656",nucleos:"16",threads:"32",base:"3.6GHz",boost:"5.1GHz",tdp:"210W",socket:"LGA4677",ano:"2026"}
,{score:75,id:"Xeon658X",nome:"Intel Xeon 658X",nucleos:"20",threads:"40",base:"3.8GHz",boost:"5.3GHz",tdp:"250W",socket:"LGA4677",ano:"2026"}
,{score:80,id:"Xeon674X",nome:"Intel Xeon 674X",nucleos:"24",threads:"48",base:"4.0GHz",boost:"5.5GHz",tdp:"270W",socket:"LGA4677",ano:"2026"}
,{score:80,id:"Xeon676X",nome:"Intel Xeon 676X",nucleos:"24",threads:"48",base:"4.0GHz",boost:"5.5GHz",tdp:"275W",socket:"LGA4677",ano:"2026"}
,{score:85,id:"Xeon678X",nome:"Intel Xeon 678X",nucleos:"28",threads:"56",base:"4.2GHz",boost:"5.6GHz",tdp:"300W",socket:"LGA4677",ano:"2026"}
,{score:90,id:"Xeon696X",nome:"Intel Xeon 696X",nucleos:"32",threads:"64",base:"4.5GHz",boost:"5.8GHz",tdp:"350W",socket:"LGA4677",ano:"2026"}
,{score:90,id:"Xeon698X",nome:"Intel Xeon 698X",nucleos:"32",threads:"64",base:"4.5GHz",boost:"5.8GHz",tdp:"350W",socket:"LGA4677",ano:"2026"}
,{score:72,id:"Ryzen5_660",nome:"AMD Ryzen 5 660",nucleos:"8",threads:"16",base:"3.8GHz",boost:"5.0GHz",tdp:"65W",socket:"AM5",ano:"2027"},{score:70,id:"EPYC_9024",nome:"AMD EPYC 9024",nucleos:"32",threads:"64",base:"2.5GHz",boost:"4.5GHz",tdp:"280W",socket:"SPo5",ano:"2027"},{score:88,id:"CoreUltra9_590K",nome:"Intel Core Ultra 9 590K",nucleos:"24",threads:"32",base:"3.2GHz",boost:"5.8GHz",tdp:"250W",socket:"LGA1851",ano:"2027"},{score:75,id:"Xeon6503P",nome:"Intel Xeon 6503P",nucleos:"16",threads:"32",base:"3.2GHz",boost:"4.7GHz",tdp:"135W",socket:"LGA4677",ano:"2026"}
,{score:85,id:"Xeon6960E",nome:"Intel Xeon 6960E+",nucleos:"48",threads:"96",base:"3.0GHz",boost:"4.3GHz",tdp:"330W",socket:"LGA4677",ano:"2026"}
,{score:90,id:"Xeon6970E",nome:"Intel Xeon 6970E+",nucleos:"64",threads:"128",base:"3.2GHz",boost:"4.5GHz",tdp:"400W",socket:"LGA4677",ano:"2026"}
,{score:90,id:"Xeon6980E",nome:"Intel Xeon 6980E+",nucleos:"64",threads:"128",base:"3.2GHz",boost:"4.5GHz",tdp:"400W",socket:"LGA4677",ano:"2026"}
,{score:95,id:"Xeon6990E",nome:"Intel Xeon 6990E+",nucleos:"80",threads:"160",base:"3.5GHz",boost:"4.7GHz",tdp:"450W",socket:"LGA4677",ano:"2026"}
// Desktop Raptor Lake
,{score:75,id:"Xeon6377P",nome:"Intel Xeon 6377P",nucleos:"8",threads:"16",base:"3.5GHz",boost:"5.0GHz",tdp:"95W",socket:"LGA4677",ano:"2026"}
// Notebook Raptor Lake / Hawk Point
,{score:52,id:"Ryzen3_205",nome:"AMD Ryzen 3 205",nucleos:"8",threads:"8",base:"3.0GHz",boost:"4.7GHz",tdp:"N/A",socket:"Mobile",ano:"2026"},
{score:90,id:"IntelCoreUltra9285",nome:"Intel Core Ultra 9 processor 285",nucleos:"24",threads:"24",base:"2.5GHz",boost:"5.6GHz",tdp:"65W",socket:"LGA1851",ano:"2025"},
{score:82,id:"IntelCoreUltra7265",nome:"Intel Core Ultra 7 processor 265",nucleos:"20",threads:"20",base:"2.4GHz",boost:"5.2GHz",tdp:"65W",socket:"LGA1851",ano:"2025"},
{score:70,id:"IntelCoreUltra5245",nome:"Intel Core Ultra 5 processor 245",nucleos:"14",threads:"14",base:"3.0GHz",boost:"5.1GHz",tdp:"65W",socket:"LGA1851",ano:"2025"},
{score:97,id:"AMDRyzen99950X3D",nome:"AMD Ryzen 9 9950X3D",nucleos:"16",threads:"32",base:"4.3GHz",boost:"5.7GHz",tdp:"200W",socket:"AM5",ano:"2025"},
{score:93,id:"AMDRyzen99900X3D",nome:"AMD Ryzen 9 9900X3D",nucleos:"12",threads:"24",base:"4.4GHz",boost:"5.5GHz",tdp:"120W",socket:"AM5",ano:"2025"},
{score:68,id:"AMDRyzenAI7PRO350",nome:"AMD Ryzen AI 7 PRO 350",nucleos:"8",threads:"16",base:"2.0GHz",boost:"5.0GHz",tdp:"28W",socket:"Mobile",ano:"2025"},],
gpus:[
{score:100,id:"RTX5090",nome:"NVIDIA RTX 5090",memoria:"32GB GDDR7",cuda:"21760",tdp:"575W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:85,id:"RTX5080",nome:"NVIDIA RTX 5080",memoria:"16GB GDDR7",cuda:"10752",tdp:"360W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:100,id:"RTX4090",nome:"NVIDIA RTX 4090",memoria:"24GB GDDR6X",cuda:"16384",tdp:"450W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:62,id:"RX9070XT",nome:"AMD RX 9070 XT",memoria:"16GB GDDR6",stream:"4096",tdp:"304W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:74,id:"RX7900XTX",nome:"AMD RX 7900 XTX",memoria:"24GB GDDR6",stream:"6144",tdp:"355W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:61,id:"RTX4070",nome:"NVIDIA RTX 4070",memoria:"12GB GDDR6X",cuda:"5888",tdp:"200W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:96,id:"RTX4090L",nome:"NVIDIA RTX 4090 Laptop",memoria:"16GB GDDR6X",cuda:"16384",tdp:"175W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:100,id:"RTX5090L",nome:"NVIDIA RTX 5090 Laptop",memoria:"24GB GDDR7",cuda:"17920",tdp:"175W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"},
{score:82,id:"RTX5080L",nome:"NVIDIA RTX 5080 Laptop",memoria:"16GB GDDR7",cuda:"11264",tdp:"175W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"},
{score:69,id:"RTX5070TiL",nome:"NVIDIA RTX 5070 Ti Laptop",memoria:"12GB GDDR7",cuda:"8960",tdp:"150W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"},
{score:59,id:"RTX5070L",nome:"NVIDIA RTX 5070 Laptop",memoria:"12GB GDDR7",cuda:"6144",tdp:"150W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"},
{score:48,id:"RTX5060L",nome:"NVIDIA RTX 5060 Laptop",memoria:"8GB GDDR7",cuda:"4352",tdp:"115W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"},
{score:40,id:"RTX5050L",nome:"NVIDIA RTX 5050 Laptop",memoria:"8GB GDDR7",cuda:"2048",tdp:"100W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"},
{score:77,id:"RTX4080",nome:"NVIDIA RTX 4080",memoria:"16GB GDDR6X",cuda:"9728",tdp:"320W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:84,id:"RTX4080Super",nome:"NVIDIA RTX 4080 Super",memoria:"16GB GDDR6X",cuda:"10752",tdp:"320W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2024"},
{score:76,id:"RTX4070TiSuper",nome:"NVIDIA RTX 4070 Ti Super",memoria:"16GB GDDR6X",cuda:"8448",tdp:"285W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2024"},
{score:67,id:"RTX4070Ti",nome:"NVIDIA RTX 4070 Ti",memoria:"12GB GDDR6X",cuda:"7680",tdp:"285W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:46,id:"RTX4060",nome:"NVIDIA RTX 4060",memoria:"8GB GDDR6",cuda:"3072",tdp:"115W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:60,id:"RTX4060Ti-16GB",nome:"NVIDIA RTX 4060 Ti (16GB)",memoria:"16GB GDDR6",cuda:"4352",tdp:"165W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:50,id:"RTX4060Ti-8GB",nome:"NVIDIA RTX 4060 Ti (8GB)",memoria:"8GB GDDR6",cuda:"4352",tdp:"165W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:58,id:"RX7800XT",nome:"AMD RX 7800 XT",memoria:"16GB GDDR6",stream:"3840",tdp:"263W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:52,id:"RX7700XT",nome:"AMD RX 7700 XT",memoria:"12GB GDDR6",stream:"3456",tdp:"245W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:44,id:"RX7600XT",nome:"AMD RX 7600 XT",memoria:"8GB GDDR6",stream:"2048",tdp:"195W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2024"},
{score:42,id:"RX7600",nome:"AMD RX 7600",memoria:"8GB GDDR6",stream:"2048",tdp:"165W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:50,id:"B580",nome:"Intel Arc B580",memoria:"12GB GDDR6",stream:"2496",tdp:"190W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2024"},
{score:47,id:"B570",nome:"Intel Arc B570",memoria:"10GB GDDR6",stream:"2304",tdp:"150W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2024"},
{score:42,id:"A580",nome:"Intel Arc A580",memoria:"8GB GDDR6",stream:"2048",tdp:"50W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2023"},
{score:87,id:"RTX3090",nome:"NVIDIA RTX 3090",memoria:"24GB GDDR6X",cuda:"10496",tdp:"350W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:58,id:"RX6900XT",nome:"AMD RX 6900 XT",memoria:"16GB GDDR6",stream:"5120",tdp:"315W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:56,id:"RX6800XT",nome:"AMD RX 6800 XT",memoria:"16GB GDDR6",stream:"4608",tdp:"300W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:54,id:"RX6800",nome:"AMD RX 6800",memoria:"16GB GDDR6",stream:"3840",tdp:"300W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:63,id:"RTX3080",nome:"NVIDIA RTX 3080",memoria:"10GB GDDR6X",cuda:"8704",tdp:"320W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:51,id:"RTX3070",nome:"NVIDIA RTX 3070",memoria:"8GB GDDR6X",cuda:"5888",tdp:"220W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:48,id:"RTX3060Ti",nome:"NVIDIA RTX 3060 Ti",memoria:"8GB GDDR6",cuda:"4864",tdp:"200W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:42,id:"GTX1080Ti",nome:"NVIDIA GTX 1080 Ti",memoria:"11GB GDDR5X",cuda:"3584",tdp:"250W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:34,id:"RX580",nome:"AMD RX 580",memoria:"8GB GDDR5",stream:"2304",tdp:"185W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:46,id:"RTX2080Ti",nome:"NVIDIA RTX 2080 Ti",memoria:"11GB GDDR6",cuda:"4352",tdp:"250W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2018"},
{score:38,id:"RTX2080",nome:"NVIDIA RTX 2080",memoria:"8GB GDDR6",cuda:"2944",tdp:"215W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2018"},
{score:40,id:"RTX2080S",nome:"NVIDIA RTX 2080 Super",memoria:"8GB GDDR6",cuda:"3072",tdp:"250W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:38,id:"RTX2070S",nome:"NVIDIA RTX 2070 Super",memoria:"8GB GDDR6",cuda:"2560",tdp:"215W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:38,id:"RX5700XT",nome:"AMD RX 5700 XT",memoria:"8GB GDDR6",stream:"2560",tdp:"225W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2019"},
{score:37,id:"RX5700",nome:"AMD RX 5700",memoria:"8GB GDDR6",stream:"2304",tdp:"180W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2019"},
{score:33,id:"RTX2060",nome:"NVIDIA RTX 2060",memoria:"6GB GDDR6",cuda:"1920",tdp:"160W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:32,id:"GTX1660Ti",nome:"NVIDIA GTX 1660 Ti",memoria:"6GB GDDR6",cuda:"1536",tdp:"120W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:32,id:"GTX1660",nome:"NVIDIA GTX 1660",memoria:"6GB GDDR6",cuda:"1536",tdp:"120W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:29,id:"GTX1650S",nome:"NVIDIA GTX 1650 Super",memoria:"4GB GDDR6",cuda:"1280",tdp:"100W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:27,id:"GTX1650",nome:"NVIDIA GTX 1650",memoria:"4GB GDDR6",cuda:"896",tdp:"75W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:31,id:"RX5500XT",nome:"AMD RX 5500 XT",memoria:"4GB GDDR6",stream:"1792",tdp:"64W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2019"},
{score:36,id:"RX5600XT",nome:"AMD RX 5600 XT",memoria:"6GB GDDR6",stream:"2304",tdp:"150W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:39,id:"RX590GME",nome:"AMD RX 590 GME",memoria:"8GB GDDR5",stream:"2304",tdp:"175W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2020"},
{score:29,id:"RX5300",nome:"AMD RX 5300",memoria:"4GB GDDR6",stream:"1024",tdp:"50W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:79,id:"RTX5070Ti",nome:"NVIDIA RTX 5070 Ti",memoria:"16GB GDDR7",cuda:"8960",tdp:"300W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:64,id:"RTX5070",nome:"NVIDIA RTX 5070",memoria:"12GB GDDR7",cuda:"6144",tdp:"250W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:61,id:"RX9070",nome:"AMD RX 9070",memoria:"16GB GDDR6",stream:"3840",tdp:"220W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:63,id:"RTX5060Ti-16GB",nome:"NVIDIA RTX 5060 Ti (16GB)",memoria:"16GB GDDR7",cuda:"4352",tdp:"180W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:53,id:"RTX5060Ti-8GB",nome:"NVIDIA RTX 5060 Ti (8GB)",memoria:"8GB GDDR7",cuda:"4352",tdp:"180W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:51,id:"RTX5060",nome:"NVIDIA RTX 5060",memoria:"8GB GDDR7",cuda:"3584",tdp:"145W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:45,id:"RX9060XT",nome:"AMD RX 9060 XT",memoria:"8GB GDDR6",stream:"2048",tdp:"150W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:45,id:"RTX5050",nome:"NVIDIA RTX 5050",memoria:"8GB GDDR7",cuda:"2048",tdp:"130W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"},
{score:66,id:"RTX4070Super",nome:"NVIDIA RTX 4070 Super",memoria:"12GB GDDR6X",cuda:"7168",tdp:"220W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2024"},
{score:67,id:"RX7900XT",nome:"AMD RX 7900 XT",memoria:"20GB GDDR6",stream:"5376",tdp:"315W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:90,id:"RTX3090Ti",nome:"NVIDIA RTX 3090 Ti",memoria:"24GB GDDR6X",cuda:"10752",tdp:"450W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:69,id:"RTX3080-12GB",nome:"NVIDIA RTX 3080 (12GB)",memoria:"12GB GDDR6X",cuda:"8704",tdp:"320W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:63,id:"RX6950XT",nome:"AMD RX 6950 XT",memoria:"16GB GDDR6",stream:"5760",tdp:"335W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:50,id:"RX6750XT",nome:"AMD RX 6750 XT",memoria:"12GB GDDR6",stream:"3328",tdp:"250W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:43,id:"RX6650XT",nome:"AMD RX 6650 XT",memoria:"8GB GDDR6",stream:"2816",tdp:"209W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:46,id:"RX6700",nome:"AMD RX 6700",memoria:"12GB GDDR6",stream:"2304",tdp:"230W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:52,id:"A770-16GB",nome:"Intel Arc A770 (16GB)",memoria:"16GB GDDR6",stream:"2560",tdp:"220W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:43,id:"A770-8GB",nome:"Intel Arc A770 (8GB)",memoria:"8GB GDDR6",stream:"2560",tdp:"220W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:52,id:"A750",nome:"Intel Arc A750",memoria:"16GB GDDR6",stream:"2560",tdp:"125W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:37,id:"A380",nome:"Intel Arc A380",memoria:"8GB GDDR6",stream:"1024",tdp:"75W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:31,id:"GTX1630",nome:"NVIDIA GTX 1630",memoria:"4GB GDDR6",cuda:"512",tdp:"75W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2022"},
{score:32,id:"RX6500XT",nome:"AMD RX 6500 XT",memoria:"4GB GDDR6",stream:"1024",tdp:"77W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:32,id:"RX6400",nome:"AMD RX 6400",memoria:"4GB GDDR6",stream:"1024",tdp:"53W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:31,id:"A310",nome:"Intel Arc A310",memoria:"4GB GDDR6",stream:"768",tdp:"50W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2022"},
{score:73,id:"RTX3080Ti",nome:"NVIDIA RTX 3080 Ti",memoria:"12GB GDDR6X",cuda:"10240",tdp:"350W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2021"},
{score:54,id:"RTX3070Ti",nome:"NVIDIA RTX 3070 Ti",memoria:"8GB GDDR6X",cuda:"6144",tdp:"290W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2021"},
{score:49,id:"RTX3060",nome:"NVIDIA RTX 3060",memoria:"12GB GDDR6",cuda:"3584",tdp:"170W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2021"},
{score:45,id:"RTX3060-8GB",nome:"NVIDIA RTX 3060 (8GB)",memoria:"8GB GDDR6",cuda:"3584",tdp:"170W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2021"},
{score:51,id:"RX6700XT",nome:"AMD RX 6700 XT",memoria:"12GB GDDR6",stream:"4096",tdp:"230W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2021"},
{score:46,id:"RX6600XT",nome:"AMD RX 6600 XT",memoria:"8GB GDDR6",stream:"4096",tdp:"200W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2021"},
{score:38,id:"RX6600",nome:"AMD RX 6600",memoria:"8GB GDDR6",stream:"1792",tdp:"132W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2021"},
{score:44,id:"RTX2060-12GB",nome:"NVIDIA RTX 2060 (12GB)",memoria:"12GB GDDR6",cuda:"1920",tdp:"160W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2021"},
{score:37,id:"RTX2060S",nome:"NVIDIA RTX 2060 Super",memoria:"8GB GDDR6",cuda:"2176",tdp:"215W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:32,id:"GTX1660S",nome:"NVIDIA GTX 1660 Super",memoria:"6GB GDDR6",cuda:"1536",tdp:"125W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:36,id:"RTX2070",nome:"NVIDIA RTX 2070",memoria:"8GB GDDR6",cuda:"2304",tdp:"175W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2018"},
{score:59,id:"RTX4080L",nome:"NVIDIA RTX 4080 Laptop",memoria:"12GB GDDR6X",cuda:"7424",tdp:"150W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:74,id:"RTX3080TiL",nome:"NVIDIA RTX 3080 Ti Laptop",memoria:"16GB GDDR6X",cuda:"10240",tdp:"150W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:49,id:"RTX3070TiL",nome:"NVIDIA RTX 3070 Ti Laptop",memoria:"8GB GDDR6X",cuda:"5888",tdp:"115W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:53,id:"RX6850MXT",nome:"AMD RX 6850M XT",memoria:"16GB GDDR6",stream:"4096",tdp:"150W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:44,id:"RX6800S",nome:"AMD RX 6800S",memoria:"10GB GDDR6",stream:"3840",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:40,id:"RX6700S",nome:"AMD RX 6700S",memoria:"10GB GDDR6",stream:"2560",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:38,id:"RX6650MXT",nome:"AMD RX 6650M XT",memoria:"8GB GDDR6",stream:"2816",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:38,id:"RX6650M",nome:"AMD RX 6650M",memoria:"8GB GDDR6",stream:"2816",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:35,id:"RX6600S",nome:"AMD RX 6600S",memoria:"8GB GDDR6",stream:"1792",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:47,id:"A770M",nome:"Intel Arc A770M",memoria:"16GB GDDR6",stream:"2560",tdp:"125W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:40,id:"A730M",nome:"Intel Arc A730M",memoria:"12GB GDDR6",stream:"1856",tdp:"75W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:33,id:"A550M",nome:"Intel Arc A550M",memoria:"8GB GDDR6",stream:"1280",tdp:"75W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:33,id:"A370M",nome:"Intel Arc A370M",memoria:"8GB GDDR6",stream:"1280",tdp:"50W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:32,id:"A350M",nome:"Intel Arc A350M",memoria:"8GB GDDR6",stream:"1024",tdp:"50W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:27,id:"RX6500M",nome:"AMD RX 6500M",memoria:"4GB GDDR6",stream:"1024",tdp:"50W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:27,id:"RX6300M",nome:"AMD RX 6300M",memoria:"4GB GDDR6",stream:"1024",tdp:"35W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2022"},
{score:41,id:"RTX4060L",nome:"NVIDIA RTX 4060 Laptop",memoria:"8GB GDDR6",cuda:"3072",tdp:"115W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:59,id:"RX7900M",nome:"AMD RX 7900M",memoria:"16GB GDDR6",stream:"5376",tdp:"150W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:51,id:"RTX4070L",nome:"NVIDIA RTX 4070 Laptop",memoria:"8GB GDDR6",cuda:"5888",tdp:"115W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:43,id:"RX7700S",nome:"AMD RX 7700S",memoria:"10GB GDDR6",stream:"3072",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:42,id:"RX7600MXT",nome:"AMD RX 7600M XT",memoria:"12GB GDDR6",stream:"2048",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:37,id:"RX7600M",nome:"AMD RX 7600M",memoria:"8GB GDDR6",stream:"2048",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:37,id:"RX7600S",nome:"AMD RX 7600S",memoria:"8GB GDDR6",stream:"2048",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:36,id:"RX6550S",nome:"AMD RX 6550S",memoria:"8GB GDDR6",stream:"1792",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:30,id:"RX6550M",nome:"AMD RX 6550M",memoria:"4GB GDDR6",stream:"1280",tdp:"50W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:29,id:"RX6450M",nome:"AMD RX 6450M",memoria:"4GB GDDR6",stream:"1024",tdp:"50W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:38,id:"RTX4050L",nome:"NVIDIA RTX 4050 Laptop",memoria:"6GB GDDR6",cuda:"3072",tdp:"35W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2023"},
{score:34,id:"RTX3050L",nome:"NVIDIA RTX 3050 Laptop",memoria:"6GB GDDR6",cuda:"2560",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"},

{score:42,id:"TitanX",nome:"NVIDIA Titan X",memoria:"12GB GDDR5X",cuda:"3584",tdp:"250W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:42,id:"TitanXPascal",nome:"NVIDIA Titan X Pascal",memoria:"12GB GDDR5X",cuda:"3584",tdp:"250W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:34,id:"GTX1080",nome:"NVIDIA GTX 1080",memoria:"8GB GDDR5X",cuda:"2560",tdp:"180W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:31,id:"GTX1070",nome:"NVIDIA GTX 1070",memoria:"8GB GDDR5",cuda:"1920",tdp:"150W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:27,id:"GTX1060",nome:"NVIDIA GTX 1060",memoria:"6GB GDDR5",cuda:"1280",tdp:"120W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:22,id:"GTX1050",nome:"NVIDIA GTX 1050",memoria:"4GB GDDR5",cuda:"640",tdp:"75W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:22,id:"GTX1050Ti",nome:"NVIDIA GTX 1050 Ti",memoria:"4GB GDDR5",cuda:"768",tdp:"75W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:33,id:"RX480",nome:"AMD RX 480",memoria:"8GB GDDR5",stream:"2304",tdp:"110W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:28,id:"RX470",nome:"AMD RX 470",memoria:"4GB GDDR5",stream:"2304",tdp:"120W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:24,id:"RX460",nome:"AMD RX 460",memoria:"4GB GDDR5",stream:"1152",tdp:"75W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2016"},
{score:29,id:"GTX1080L",nome:"NVIDIA GTX 1080 Laptop",memoria:"8GB GDDR5X",cuda:"2560",tdp:"90W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2016"},
{score:27,id:"GTX1070L",nome:"NVIDIA GTX 1070 Laptop",memoria:"8GB GDDR5",cuda:"2048",tdp:"100W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2016"},
{score:22,id:"GTX1060L-6GB",nome:"NVIDIA GTX 1060 (6GB) Laptop",memoria:"6GB GDDR5",cuda:"1280",tdp:"80W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2016"},
{score:18,id:"GTX1060L-3GB",nome:"NVIDIA GTX 1060 (3GB) Laptop",memoria:"3GB GDDR5",cuda:"1280",tdp:"70W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2016"},
{score:49,id:"TitanV",nome:"NVIDIA Titan V",memoria:"12GB HBM2",cuda:"5120",tdp:"250W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:44,id:"TitanXP",nome:"NVIDIA Titan XP",memoria:"12GB GDDR5X",cuda:"3840",tdp:"250W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:35,id:"GTX1070Ti",nome:"NVIDIA GTX 1070 Ti",memoria:"8GB GDDR5",cuda:"2432",tdp:"180W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:29,id:"RX570",nome:"AMD RX 570",memoria:"4GB GDDR5",stream:"2304",tdp:"150W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:25,id:"RX560",nome:"AMD RX 560",memoria:"4GB GDDR5",stream:"1152",tdp:"75W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:24,id:"RX550",nome:"AMD RX 550",memoria:"4GB GDDR5",stream:"640",tdp:"50W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:37,id:"Vega56",nome:"AMD Vega 56",memoria:"8GB HBM2",stream:"3072",tdp:"210W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:40,id:"Vega64",nome:"AMD Vega 64",memoria:"8GB HBM2",stream:"4096",tdp:"295W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:20,id:"GT1030",nome:"NVIDIA GeForce GT 1030",memoria:"2GB GDDR5",cuda:"384",tdp:"30W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:19,id:"GTX1050TiL",nome:"NVIDIA GTX 1050 Ti Laptop",memoria:"4GB GDDR5",cuda:"768",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2017"},
{score:19,id:"GTX1050L-4GB",nome:"NVIDIA GTX 1050 (4GB) Laptop",memoria:"4GB GDDR5",cuda:"640",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2017"},
{score:20,id:"R520",nome:"AMD Radeon 520",memoria:"2GB GDDR5",stream:"320",tdp:"50W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:15,id:"R520L",nome:"AMD Radeon 520 Laptop",memoria:"2GB GDDR5",stream:"320",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2017"},
{score:20,id:"R530",nome:"AMD Radeon 530",memoria:"2GB GDDR5",stream:"384",tdp:"50W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:15,id:"R530L",nome:"AMD Radeon 530 Laptop",memoria:"2GB GDDR5",stream:"384",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2017"},
{score:23,id:"RX540",nome:"AMD Radeon RX 540",memoria:"4GB GDDR5",stream:"576",tdp:"75W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2017"},
{score:18,id:"RX540L",nome:"AMD Radeon RX 540 Laptop",memoria:"4GB GDDR5",stream:"576",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2017"},
{score:36,id:"RX590",nome:"AMD RX 590",memoria:"8GB GDDR5",stream:"2304",tdp:"225W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2018"},
{score:37,id:"RX570X",nome:"AMD RX 570X",memoria:"8GB GDDR5",stream:"2560",tdp:"180W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2018"},
{score:20,id:"RX550XL",nome:"AMD RX 550X Laptop",memoria:"4GB GDDR5",stream:"640",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2018"},
{score:25,id:"RX550X",nome:"AMD RX 550X",memoria:"4GB GDDR5",stream:"640",tdp:"75W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2018"},
{score:63,id:"TitanRTX",nome:"NVIDIA Titan RTX",memoria:"24GB GDDR6",cuda:"4608",tdp:"280W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2018"},
{score:18,id:"R610L",nome:"AMD Radeon 610 Laptop",memoria:"2GB GDDR5",stream:"384",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:18,id:"R620L",nome:"AMD Radeon 620 Laptop",memoria:"2GB GDDR5",stream:"384",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:18,id:"R625L",nome:"AMD Radeon 625 Laptop",memoria:"2GB GDDR5",stream:"384",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:23,id:"R630",nome:"AMD Radeon 630",memoria:"2GB GDDR5",stream:"384",tdp:"50W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:18,id:"R630L",nome:"AMD Radeon 630 Laptop",memoria:"2GB GDDR5",stream:"384",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:23,id:"RX5300M",nome:"AMD RX 5300M",memoria:"4GB GDDR6",stream:"1024",tdp:"50W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2019"},
{score:28,id:"RX5500",nome:"AMD RX 5500",memoria:"4GB GDDR6",stream:"1024",tdp:"100W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2019"},
{score:23,id:"RX5500M",nome:"AMD RX 5500M",memoria:"4GB GDDR6",stream:"1024",tdp:"50W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2019"},
{score:29,id:"RX640",nome:"AMD RX 640",memoria:"4GB GDDR6",stream:"1280",tdp:"73W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2019"},
{score:24,id:"RX640L",nome:"AMD RX 640 Laptop",memoria:"4GB GDDR6",stream:"1280",tdp:"50W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2019"},
{score:49,id:"RadeonVII",nome:"AMD Radeon VII",memoria:"16GB HBM2",stream:"3072",tdp:"220W",tipo:"Desktop",bus:"PCIe 3.0",ano:"2019"},
{score:36,id:"RX5600",nome:"AMD RX 5600",memoria:"6GB GDDR6",stream:"2304",tdp:"135W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2020"},
{score:31,id:"RX5600M",nome:"AMD RX 5600M",memoria:"6GB GDDR6",stream:"2304",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2020"},
{score:34,id:"RX5700M",nome:"AMD RX 5700M",memoria:"8GB GDDR6",stream:"2304",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2020"},
{score:22,id:"GTX1650L-GDDR5",nome:"NVIDIA GTX 1650 (GDDR5) Laptop",memoria:"4GB GDDR5",cuda:"896",tdp:"50W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:27,id:"GTX1660TiL",nome:"NVIDIA GTX 1660 Ti Laptop",memoria:"6GB GDDR6",cuda:"1536",tdp:"80W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:27,id:"RTX2060L",nome:"NVIDIA RTX 2060 Laptop",memoria:"6GB GDDR6",cuda:"1536",tdp:"80W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:32,id:"RTX2070L",nome:"NVIDIA RTX 2070 Laptop",memoria:"8GB GDDR6",cuda:"2304",tdp:"115W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:34,id:"RTX2080L",nome:"NVIDIA RTX 2080 Laptop",memoria:"8GB GDDR6",cuda:"2944",tdp:"115W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2019"},
{score:33,id:"RX6600M",nome:"AMD RX 6600M",memoria:"8GB GDDR6",stream:"1792",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"},
{score:38,id:"RX6700M",nome:"AMD RX 6700M",memoria:"10GB GDDR6",stream:"2560",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"},
{score:45,id:"RX6800M",nome:"AMD RX 6800M",memoria:"12GB GDDR6",stream:"3840",tdp:"100W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"},
{score:29,id:"RTX2050L",nome:"NVIDIA RTX 2050 Laptop",memoria:"4GB GDDR6",cuda:"2048",tdp:"60W",tipo:"Laptop",bus:"PCIe 3.0",ano:"2021"},
{score:38,id:"RTX3060L",nome:"NVIDIA RTX 3060 Laptop",memoria:"6GB GDDR6",cuda:"3840",tdp:"115W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"},
{score:33,id:"RTX3050TiL",nome:"NVIDIA RTX 3050 Ti Laptop",memoria:"4GB GDDR6",cuda:"3072",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"},
{score:48,id:"RTX3070L",nome:"NVIDIA RTX 3070 Laptop",memoria:"8GB GDDR6",cuda:"5888",tdp:"115W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"},
{score:73,id:"RTX3080L-16GB",nome:"NVIDIA RTX 3080 (16GB) Laptop",memoria:"16GB GDDR6X",cuda:"10240",tdp:"150W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"},
{score:63,id:"RTX3080L-8GB",nome:"NVIDIA RTX 3080 (8GB) Laptop",memoria:"8GB GDDR6X",cuda:"10240",tdp:"150W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2021"}

// === NEW 2025 GPUs (from GPU_Lancadas_2025_TechnicalCity.md) ===

,{score:20,id:"Arc130TM",nome:"Intel Arc 130T Mobile",memoria:"2GB",stream:"32",tdp:"35W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:20,id:"Arc140TM",nome:"Intel Arc 140T Mobile",memoria:"2GB",stream:"32",tdp:"35W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:25,id:"Radeon8040SM",nome:"AMD Radeon 8040S Mobile",memoria:"4GB",stream:"512",tdp:"55W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:26,id:"Radeon8050SM",nome:"AMD Radeon 8050S Mobile",memoria:"4GB",stream:"512",tdp:"55W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:27,id:"Radeon8060SM",nome:"AMD Radeon 8060S Mobile",memoria:"4GB",stream:"640",tdp:"55W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:25,id:"RX8040SM",nome:"AMD Radeon RX 8040S Mobile",memoria:"4GB",stream:"512",tdp:"55W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:25,id:"RX8050SM",nome:"AMD Radeon RX 8050S Mobile",memoria:"4GB",stream:"512",tdp:"55W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:26,id:"RX8060SM",nome:"AMD Radeon RX 8060S Mobile",memoria:"4GB",stream:"640",tdp:"55W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:20,id:"IntelArc130T",nome:"Intel Arc Graphics 130T",memoria:"2GB",stream:"32",tdp:"35W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:20,id:"IntelArc140T",nome:"Intel Arc Graphics 140T",memoria:"2GB",stream:"32",tdp:"35W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:15,id:"Intel2CoreIGPU",nome:"Intel Graphics 2-Core iGPU",memoria:"Shared",stream:"64",tdp:"N/A",tipo:"Desktop",bus:"PCIe 4.0",ano:"2025"}
,{score:15,id:"Intel4CoreIGPU",nome:"Intel Graphics 4-Core iGPU",memoria:"Shared",stream:"128",tdp:"N/A",tipo:"Desktop",bus:"PCIe 4.0",ano:"2025"}
,{score:97,id:"RTX5090D",nome:"NVIDIA RTX 5090 D",memoria:"32GB GDDR7",cuda:"21760",tdp:"575W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:22,id:"Radeon820M",nome:"AMD Radeon 820M",memoria:"Shared",stream:"256",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:24,id:"Radeon840M",nome:"AMD Radeon 840M",memoria:"Shared",stream:"384",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:26,id:"Radeon860M",nome:"AMD Radeon 860M",memoria:"Shared",stream:"512",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:65,id:"RTX5070TiL2",nome:"NVIDIA RTX 5070 Ti Mobile",memoria:"12GB GDDR7",cuda:"8960",tdp:"60W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:95,id:"RTX5090M",nome:"NVIDIA RTX 5090 Mobile",memoria:"24GB GDDR7",cuda:"17920",tdp:"95W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:55,id:"RTXPRO500M",nome:"NVIDIA RTX PRO 500 Blackwell Mobile",memoria:"4GB GDDR6",cuda:"256",tdp:"35W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:58,id:"RTXPRO1000M",nome:"NVIDIA RTX PRO 1000 Blackwell Mobile",memoria:"8GB GDDR6",cuda:"512",tdp:"35W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:62,id:"RTXPRO2000M",nome:"NVIDIA RTX PRO 2000 Blackwell Mobile",memoria:"8GB GDDR6",cuda:"1024",tdp:"45W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:66,id:"RTXPRO3000M",nome:"NVIDIA RTX PRO 3000 Blackwell Mobile",memoria:"12GB GDDR6",cuda:"2048",tdp:"60W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:70,id:"RTXPRO4000M",nome:"NVIDIA RTX PRO 4000 Blackwell Mobile",memoria:"16GB GDDR6",cuda:"4096",tdp:"80W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:72,id:"RTXPRO5000M",nome:"NVIDIA RTX PRO 5000 Blackwell Mobile",memoria:"24GB GDDR6",cuda:"5120",tdp:"95W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:85,id:"RTX6000D",nome:"NVIDIA RTX 6000D",memoria:"48GB GDDR6",cuda:"16384",tdp:"600W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:60,id:"RTXPRO4000",nome:"NVIDIA RTX PRO 4000",memoria:"20GB GDDR6",cuda:"4096",tdp:"140W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:64,id:"RTXPRO4500",nome:"NVIDIA RTX PRO 4500",memoria:"32GB GDDR6",cuda:"5120",tdp:"200W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:75,id:"RTXPRO5000",nome:"NVIDIA RTX PRO 5000",memoria:"32GB GDDR6",cuda:"13312",tdp:"300W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:88,id:"RTXPRO6000",nome:"NVIDIA RTX PRO 6000",memoria:"48GB GDDR6",cuda:"16384",tdp:"600W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:78,id:"RTXPRO6000MQ",nome:"NVIDIA RTX PRO 6000 Max-Q",memoria:"48GB GDDR6",cuda:"16384",tdp:"300W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:88,id:"RTXPRO6000S",nome:"NVIDIA RTX PRO 6000 Server",memoria:"48GB GDDR6",cuda:"16384",tdp:"600W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:88,id:"RTXPRO6000D",nome:"NVIDIA RTX PRO 6000D",memoria:"48GB GDDR6",cuda:"16384",tdp:"600W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:80,id:"RTX5080M",nome:"NVIDIA RTX 5080 Mobile",memoria:"16GB GDDR7",cuda:"11264",tdp:"80W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:62,id:"RTX5070M",nome:"NVIDIA RTX 5070 Mobile",memoria:"12GB GDDR7",cuda:"6144",tdp:"50W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:46,id:"RTX5060M",nome:"NVIDIA RTX 5060 Mobile",memoria:"8GB GDDR7",cuda:"3584",tdp:"45W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:60,id:"RX9070GRE",nome:"AMD RX 9070 GRE",memoria:"16GB GDDR6",stream:"3584",tdp:"220W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:82,id:"InstinctMI350X",nome:"AMD Instinct MI350X",memoria:"256GB HBM3e",cuda:"15360",tdp:"1000W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2025"}
,{score:88,id:"InstinctMI355X",nome:"AMD Instinct MI355X",memoria:"288GB HBM3e",cuda:"16384",tdp:"1400W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2025"}
,{score:30,id:"Switch2GPU",nome:"NVIDIA Switch 2 GPU",memoria:"4GB LPDDR5",cuda:"896",tdp:"40W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2025"}
,{score:48,id:"RX9060XT16GB",nome:"AMD RX 9060 XT 16GB",memoria:"16GB GDDR6",stream:"2304",tdp:"160W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:43,id:"RX9060XT8GB",nome:"AMD RX 9060 XT 8GB",memoria:"8GB GDDR6",stream:"2048",tdp:"150W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:38,id:"RTX5050M",nome:"NVIDIA RTX 5050 Mobile",memoria:"8GB GDDR7",cuda:"2048",tdp:"50W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2025"}
,{score:43,id:"RTX5050D",nome:"NVIDIA RTX 5050 Desktop",memoria:"8GB GDDR7",cuda:"2048",tdp:"130W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:28,id:"Xclipse950",nome:"AMD Xclipse 950",memoria:"Shared",stream:"1024",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:97,id:"RTX5090DV2",nome:"NVIDIA RTX 5090 D V2",memoria:"32GB GDDR7",cuda:"21760",tdp:"575W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:60,id:"RTXPRO2000B",nome:"NVIDIA RTX PRO 2000 Blackwell",memoria:"20GB GDDR6",cuda:"2048",tdp:"70W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:60,id:"RTXPRO4000BSFF",nome:"NVIDIA RTX PRO 4000 Blackwell SFF",memoria:"20GB GDDR6",cuda:"4096",tdp:"70W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:30,id:"RX7400",nome:"AMD RX 7400",memoria:"4GB GDDR6",stream:"512",tdp:"43W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2025"}
,{score:44,id:"RX9060",nome:"AMD RX 9060",memoria:"8GB GDDR6",stream:"2048",tdp:"132W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}
,{score:50,id:"JetsonT4000",nome:"NVIDIA Jetson T4000",memoria:"32GB LPDDR5",cuda:"512",tdp:"40W",tipo:"Workstation",bus:"PCIe 4.0",ano:"2025"}
,{score:52,id:"JetsonT5000",nome:"NVIDIA Jetson T5000",memoria:"32GB LPDDR5",cuda:"512",tdp:"40W",tipo:"Workstation",bus:"PCIe 4.0",ano:"2025"}
,{score:90,id:"B300SXM6",nome:"NVIDIA B300 SXM6 AC",memoria:"288GB HBM3e",cuda:"18432",tdp:"1100W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2025"}
,{score:58,id:"ArcProB50",nome:"Intel Arc Pro B50",memoria:"16GB GDDR6",stream:"2560",tdp:"70W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2025"}
,{score:62,id:"ArcProB60",nome:"Intel Arc Pro B60",memoria:"18GB GDDR6",stream:"3072",tdp:"200W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2025"}
,{score:65,id:"ArcProB60D",nome:"Intel Arc Pro B60 Dual",memoria:"36GB GDDR6",stream:"3072",tdp:"400W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2025"}
,{score:42,id:"AdrenoX285",nome:"Qualcomm Adreno X2-85",memoria:"Shared",stream:"1024",tdp:"30W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:44,id:"AdrenoX290",nome:"Qualcomm Adreno X2-90",memoria:"Shared",stream:"1280",tdp:"40W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:38,id:"Adreno840",nome:"Qualcomm Adreno 840",memoria:"Shared",stream:"512",tdp:"20W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2025"}
,{score:82,id:"RTXPRO500072",nome:"NVIDIA RTX PRO 5000 72GB Blackwell",memoria:"72GB GDDR6",cuda:"13312",tdp:"300W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2025"}
,{score:70,id:"GB10",nome:"NVIDIA GB10",memoria:"24GB HBM3",cuda:"1024",tdp:"140W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2025"}
,{score:44,id:"RX9060XTLP",nome:"AMD RX 9060 XT LP",memoria:"8GB GDDR6",stream:"2048",tdp:"140W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2025"}

// === NEW 2026 GPUs ===
// Desktop
,{score:30,id:"RX9050",nome:"AMD Radeon RX 9050",memoria:"4GB GDDR6",stream:"1024",tdp:"92W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2026"}
,{score:30,id:"RX9050-4GB",nome:"AMD Radeon RX 9050 4GB",memoria:"4GB GDDR6",stream:"1024",tdp:"92W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2026"}
,{score:35,id:"RX9050-8GB",nome:"AMD Radeon RX 9050 8GB",memoria:"8GB GDDR6",stream:"2048",tdp:"92W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2026"}
,{score:30,id:"RX9050OEM",nome:"AMD Radeon RX 9050 OEM",memoria:"4GB GDDR6",stream:"1024",tdp:"92W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2026"}
,{score:55,id:"LisuanLXMAX",nome:"Lisuan Tech LX MAX",memoria:"16GB GDDR6",cuda:"4096",tdp:"225W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2026"}
,{score:60,id:"ArcProB65",nome:"Intel Arc Pro B65",memoria:"18GB GDDR6",stream:"3072",tdp:"200W",tipo:"Desktop",bus:"PCIe 5.0",ano:"2026"}
// Notebook/Laptop
,{score:25,id:"ArcG3",nome:"Intel Arc G3",memoria:"2GB GDDR6",stream:"128",tdp:"25W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:35,id:"ArcG3Extreme",nome:"Intel Arc G3 Extreme",memoria:"4GB GDDR6",stream:"256",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:70,id:"N1-16SM",nome:"NVIDIA N1 16SM",memoria:"16GB GDDR6",cuda:"8192",tdp:"100W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2026"}
,{score:78,id:"N1-20SM",nome:"NVIDIA N1 20SM",memoria:"20GB GDDR6",cuda:"10240",tdp:"120W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2026"}
,{score:88,id:"N1X-40SM",nome:"NVIDIA N1X 40SM",memoria:"40GB GDDR6",cuda:"20480",tdp:"175W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2026"}
,{score:92,id:"N1X-48SM",nome:"NVIDIA N1X 48SM",memoria:"48GB GDDR6",cuda:"24576",tdp:"200W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2026"}
,{score:30,id:"IntelXe3WL1",nome:"Intel Graphics 1 Xe3 Wildcat Lake iGPU",memoria:"Shared",stream:"128",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:35,id:"IntelXe3WL2",nome:"Intel Graphics 2 Xe3 Wildcat Lake iGPU",memoria:"Shared",stream:"256",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:45,id:"Radeon880M",nome:"AMD Radeon 880M",memoria:"Shared",stream:"1024",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:48,id:"Radeon890M",nome:"AMD Radeon 890M",memoria:"Shared",stream:"1280",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:30,id:"ArcB370-10",nome:"Intel Arc B370 10",memoria:"6GB GDDR6",stream:"1536",tdp:"40W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:38,id:"IntelXe3PL4",nome:"Intel Graphics 4 Xe3 Panther Lake iGPU",memoria:"Shared",stream:"384",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:30,id:"AdrenoX245",nome:"Qualcomm SD X2 Adreno X2-45",memoria:"Shared",stream:"512",tdp:"30W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:40,id:"Radeon8065S",nome:"AMD Radeon 8065S",memoria:"4GB",stream:"640",tdp:"55W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:28,id:"Adreno829",nome:"Qualcomm Adreno 829",memoria:"Shared",stream:"384",tdp:"25W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:30,id:"ArcB370",nome:"Intel Arc B370",memoria:"6GB GDDR6",stream:"1536",tdp:"25W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:40,id:"ArcB390",nome:"Intel Arc B390",memoria:"8GB GDDR6",stream:"2048",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:28,id:"ArcG2XeM",nome:"Intel Arc Graphics 2 Xe Mobile",memoria:"4GB GDDR6",stream:"1024",tdp:"25W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:30,id:"ArcG4XeM",nome:"Intel Arc Graphics 4 Xe Mobile",memoria:"8GB GDDR6",stream:"1536",tdp:"25W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:30,id:"ArcProB370",nome:"Intel Arc Pro B370",memoria:"8GB GDDR6",stream:"1536",tdp:"25W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:40,id:"ArcProB390",nome:"Intel Arc Pro B390",memoria:"12GB GDDR6",stream:"2048",tdp:"80W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:35,id:"IntelXe3PL2",nome:"Intel Graphics 2 Xe3 Panther Lake iGPU",memoria:"Shared",stream:"256",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:35,id:"Xclipse960",nome:"AMD Xclipse 960 GPU",memoria:"Shared",stream:"1024",tdp:"15W",tipo:"Laptop",bus:"PCIe 4.0",ano:"2026"}
,{score:55,id:"M5Max40GPU",nome:"Apple M5 Max 40-Core GPU",memoria:"36GB Unified",cuda:"20480",tdp:"75W",tipo:"Laptop",bus:"PCIe 5.0",ano:"2026"}
// Workstation/Server
,{score:95,id:"InstinctMI455X",nome:"AMD Instinct MI455X",memoria:"256GB HBM3e",cuda:"15360",tdp:"2500W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:93,id:"RadeonInstinctMI455X",nome:"AMD Radeon Instinct MI455X",memoria:"256GB HBM3e",cuda:"16384",tdp:"2300W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:88,id:"InstinctMI350P",nome:"AMD Radeon Instinct MI350P",memoria:"256GB HBM3e",cuda:"12288",tdp:"600W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:62,id:"ArcProB70",nome:"Intel Arc Pro B70",memoria:"24GB GDDR6",stream:"3584",tdp:"230W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:55,id:"LisuanLXULTRA",nome:"Lisuan Tech LX ULTRA",memoria:"32GB GDDR6",cuda:"4096",tdp:"225W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:55,id:"LisuanLXPRO",nome:"Lisuan Tech LX PRO",memoria:"32GB GDDR6",cuda:"4096",tdp:"225W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:55,id:"LisuanLXMAXS",nome:"Lisuan Tech LX MAX",memoria:"16GB GDDR6",cuda:"4096",tdp:"225W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:75,id:"RTXPRO4500S",nome:"NVIDIA RTX PRO 4500 Blackwell Server",memoria:"48GB GDDR6",cuda:"8192",tdp:"165W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:30,id:"AdrenoX245S",nome:"Qualcomm SD X2 Adreno X2-45",memoria:"Shared",stream:"512",tdp:"30W",tipo:"Workstation",bus:"PCIe 4.0",ano:"2026"}
,{score:97,id:"RubinGPU",nome:"NVIDIA Rubin GPU",memoria:"256GB HBM4",cuda:"32768",tdp:"2300W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"}
,{score:40,id:"SteamMachineGPU",nome:"AMD Steam Machine GPU",memoria:"8GB GDDR6",stream:"1024",tdp:"110W",tipo:"Workstation",bus:"PCIe 5.0",ano:"2026"},{score:98,id:"RTX6090",nome:"NVIDIA RTX 6090",memoria:"36GB GDDR8",cuda:"28000",tdp:"600W",tipo:"Desktop",bus:"PCIe 6.0",ano:"2027"},{score:85,id:"RTX6080",nome:"NVIDIA RTX 6080",memoria:"18GB GDDR8",cuda:"14000",tdp:"380W",tipo:"Desktop",bus:"PCIe 6.0",ano:"2027"},{score:95,id:"RTX6090L",nome:"NVIDIA RTX 6090 Laptop",memoria:"24GB GDDR8",cuda:"28000",tdp:"190W",tipo:"Laptop",bus:"PCIe 6.0",ano:"2027"},{score:78,id:"RX10070XT",nome:"AMD RX 10070 XT",memoria:"18GB GDDR7",stream:"5120",tdp:"350W",tipo:"Desktop",bus:"PCIe 6.0",ano:"2027"},{score:72,id:"RX10070",nome:"AMD RX 10070",memoria:"16GB GDDR7",stream:"4096",tdp:"280W",tipo:"Desktop",bus:"PCIe 6.0",ano:"2027"},{score:82,id:"RX10070L",nome:"AMD RX 10070 Laptop",memoria:"12GB GDDR7",stream:"3584",tdp:"120W",tipo:"Laptop",bus:"PCIe 6.0",ano:"2027"},{score:75,id:"ArcB750",nome:"Intel Arc B750",memoria:"20GB GDDR8",stream:"3072",tdp:"220W",tipo:"Desktop",bus:"PCIe 6.0",ano:"2027"},{score:92,id:"M5Ultra",nome:"Apple M5 Ultra (128-core GPU)",memoria:"128GB Unified",cuda:"32768",tdp:"120W",tipo:"Laptop",bus:"PCIe 6.0",ano:"2027"},
{score:66,id:"RX7900GRE",nome:"AMD RX 7900 GRE",memoria:"16GB GDDR6",stream:"5120",tdp:"260W",tipo:"Desktop",bus:"PCIe 4.0",ano:"2024"},],
consoles:[
{score:75,name:"Valve Steam Deck OLED",cpu:"APU AMD Zen 2 (4C/8T)",gpu:"Radeon RDNA 2 (8 CU)",ram:"16GB LPDDR5",storage:"1TB NVMe",tela:"7.4\" 1280x800 OLED 90Hz",battery:"50Wh",peso:"640g",ano:"2023"},
{score:72,name:"Valve Steam Deck",cpu:"APU AMD Zen 2 (4C/8T)",gpu:"Radeon RDNA 2 (8 CU)",ram:"16GB LPDDR5",storage:"512GB NVMe",tela:"7\" 1280x800 IPS 60Hz",battery:"50Wh",peso:"669g",ano:"2022"},
{score:82,name:"ASUS ROG Ally X",cpu:"Ryzen Z1 Extreme",gpu:"Radeon 680M",ram:"16GB LPDDR5X",storage:"1TB NVMe",tela:"7\" 1920x1080 IPS 120Hz",battery:"80Wh",peso:"720g",ano:"2024"},
{score:81,name:"ASUS ROG Ally",cpu:"Ryzen Z1 Extreme",gpu:"Radeon 680M",ram:"16GB LPDDR5",storage:"1TB NVMe",tela:"7\" 1920x1080 IPS 120Hz",battery:"48Wh",peso:"680g",ano:"2023"},
{score:81,name:"Lenovo Legion Go",cpu:"Ryzen Z1 Extreme",gpu:"Radeon 680M",ram:"16GB LPDDR5",storage:"1TB NVMe",tela:"8.8\" 1920x1200 IPS 144Hz",battery:"47.5Wh",peso:"820g",ano:"2023"},
{score:82,name:"GPD Win 4",cpu:"Ryzen 7 7840U",gpu:"Radeon 780M",ram:"32GB LPDDR5",storage:"1TB NVMe",tela:"8\" 1920x1200 IPS 120Hz",battery:"55.5Wh",peso:"830g",ano:"2024"},
{score:80,name:"AYANEO 2",cpu:"Ryzen 7 7840U",gpu:"Radeon 780M",ram:"32GB LPDDR5",storage:"1TB NVMe",tela:"7\" 2000x1200 IPS 120Hz",battery:"50Wh",peso:"650g",ano:"2022"},
{score:91,name:"ASUS ROG Ally 2",cpu:"Ryzen AI Z2 Extreme",gpu:"Radeon 880M",ram:"32GB LPDDR5X",storage:"1TB NVMe",tela:"7\" 1920x1080 IPS 144Hz",battery:"84Wh",peso:"710g",ano:"2026"},
{score:80,name:"Nintendo Switch 2",cpu:"NVIDIA T239",gpu:"NVIDIA custom (896 cores)",ram:"16GB LPDDR5X",storage:"256GB eMMC",tela:"12.2\" 1920x1080 LCD 120Hz",battery:"5220mAh",peso:"401g",ano:"2025"},
{score:52,name:"Nintendo Switch OLED",cpu:"NVIDIA Tegra X1+",gpu:"Maxwell 2048 cores",ram:"4GB LPDDR4X",storage:"64GB",tela:"7\" 1280x720 OLED 60Hz",battery:"4310mAh",peso:"320g",ano:"2021"},
{score:45,name:"Nintendo Switch",cpu:"NVIDIA Tegra X1",gpu:"Maxwell 2048 cores",ram:"4GB LPDDR4",storage:"32GB",tela:"6.2\" 1280x720 IPS 60Hz",battery:"4310mAh",peso:"297g",ano:"2017"},{score:88,name:"Nintendo Switch 3",cpu:"NVIDIA Custom Next-Gen",gpu:"Custom RTX-based",ram:"16GB LPDDR6",storage:"512GB NVMe",tela:"7.5\" 2560x1440 OLED 144Hz",battery:"5500mAh",peso:"420g",ano:"2027"},{score:90,name:"ASUS ROG Ally 3",cpu:"AMD Ryzen AI 9 HX 570",gpu:"Radeon 890M",ram:"32GB LPDDR6X",storage:"2TB NVMe",tela:"7\" 1920x1080 OLED 165Hz",battery:"90Wh",peso:"680g",ano:"2027"},{score:85,name:"Lenovo Legion Go 3",cpu:"AMD Ryzen AI 9 HX 570",gpu:"Radeon 890M",ram:"32GB LPDDR6X",storage:"2TB NVMe",tela:"8.8\" 2560x1600 OLED 165Hz",battery:"99.9Wh",peso:"850g",ano:"2027"},{score:80,name:"Steam Machine Pro",cpu:"AMD Ryzen 9 8945HX",gpu:"Radeon 890M",ram:"32GB LPDDR5X",storage:"2TB NVMe",tela:"8\" 1920x1200 IPS 144Hz",battery:"80Wh",peso:"750g",ano:"2027"},{score:75,name:"GPD Win 5",cpu:"AMD Ryzen 9 8940U",gpu:"Radeon 880M",ram:"64GB LPDDR5X",storage:"4TB NVMe",tela:"8\" 2560x1600 IPS 120Hz",battery:"60Wh",peso:"780g",ano:"2027"},
{score:48,name:"GPD Win 2",cpu:"Intel Core m3-7Y30",gpu:"Intel HD Graphics 615",ram:"8GB LPDDR3",storage:"128GB SSD",tela:"6\" 1280x720 IPS",battery:"9800mAh",peso:"460g",ano:"2018"},
{score:50,name:"Nintendo Switch Lite",cpu:"NVIDIA Tegra X1+",gpu:"Maxwell 256 cores",ram:"4GB LPDDR4X",storage:"32GB",tela:"5.5\" 1280x720 LCD",battery:"3570mAh",peso:"275g",ano:"2019"},
{score:62,name:"GPD Win Max",cpu:"Intel Core i5-1035G7",gpu:"Intel Iris Plus",ram:"16GB LPDDR4X",storage:"512GB NVMe",tela:"8\" 1280x800 IPS",battery:"55Wh",peso:"790g",ano:"2020"},
{score:55,name:"PlayStation Portal",cpu:"Snapdragon 662",gpu:"Adreno 610",ram:"4GB LPDDR4X",storage:"8GB",tela:"8\" 1920x1080 LCD 60Hz",battery:"4370mAh",peso:"529g",ano:"2023"},
{score:74,name:"MSI Claw A1M",cpu:"Intel Core Ultra 7 155H",gpu:"Intel Arc",ram:"16GB LPDDR5",storage:"512GB NVMe",tela:"7\" 1920x1080 IPS 120Hz",battery:"53Wh",peso:"675g",ano:"2024"},
{score:82,name:"MSI Claw 8 AI+",cpu:"Intel Core Ultra 7 258V",gpu:"Intel Arc 140V",ram:"32GB LPDDR5X",storage:"1TB NVMe",tela:"8\" 1920x1200 IPS 120Hz",battery:"80Wh",peso:"795g",ano:"2025"},
{score:78,name:"Lenovo Legion Go S",cpu:"AMD Ryzen Z2 Go",gpu:"Radeon 680M",ram:"32GB LPDDR5X",storage:"1TB NVMe",tela:"8\" 1920x1200 IPS 120Hz",battery:"55.5Wh",peso:"740g",ano:"2025"},
{score:76,name:"GPD Win Mini",cpu:"Ryzen 7 7840U",gpu:"Radeon 780M",ram:"32GB LPDDR5",storage:"512GB NVMe",tela:"7\" 1920x1080 IPS 120Hz",battery:"44Wh",peso:"520g",ano:"2023"},
{score:78,name:"MSI Claw 7 AI+",cpu:"Intel Core Ultra 7 258V",gpu:"Intel Arc 140V",ram:"32GB LPDDR5X",storage:"512GB NVMe",tela:"7\" 1920x1080 IPS 120Hz",battery:"53Wh",peso:"675g",ano:"2025"},],
rumores:[
{score:68,nome:"Samsung Galaxy S27 Ultra",categoria:"Smartphone",fonte:"Leak de cadeia de fornecimento",probabilidade:"Média",ano:"2027",descricao:"Snapdragon 8 Elite 3, câmara principal de 200MP, bateria Si/C de 6000mAh e ecrã LTPO de 144Hz."},
{score:75,nome:"iPhone 18 Pro",categoria:"Smartphone",fonte:"Analistas de supply chain",probabilidade:"Alta",ano:"2027",descricao:"A20 Pro em 2nm, câmara tripla de 48MP e novo design unificado do módulo."},
{score:65,nome:"Google Pixel 11 Pro",categoria:"Smartphone",fonte:"Fugas de software",probabilidade:"Média",ano:"2027",descricao:"Tensor G6, sensor de 200MP e carregamento sem fios de 50W."},

{score:85,nome:"Intel Core Ultra 9 395K",categoria:"CPU",fonte:"Fugas de parceiros OEM",probabilidade:"Alta",ano:"2026",descricao:"Panther Lake, 28 núcleos, NPU de 50 TOPS e iGPU Arc B40."},
{score:65,nome:"AMD Ryzen 9 10950X3D",categoria:"CPU",fonte:"Leak de roadmap",probabilidade:"Média",ano:"2027",descricao:"Zen 6 com 3D V-Cache de 3ª geração, 16 núcleos e novo socket AM6."},
{score:55,nome:"Valve Steam Deck 2",categoria:"Console Portátil",fonte:"Fugas de firmware",probabilidade:"Baixa",ano:"2027",descricao:"APU Zen 4 atualizada, 32GB de RAM, ecrã OLED de 90-144Hz e ventoinhas redimensionadas."},
{score:85,nome:"Nintendo Switch 2 OLED",categoria:"Console Portátil",fonte:"Cadeia de fornecimento",probabilidade:"Alta",ano:"2026",descricao:"Edição OLED da Switch 2 com ecrã de 8\" 120Hz e melhor dissipação térmica."},
{score:65,nome:"Lenovo Legion Go 2",categoria:"Console Portátil",fonte:"Registo de certificação",probabilidade:"Média",ano:"2027",descricao:"Ryzen AI 9, 32GB LPDDR5X, ecrã 8.8\" OLED 165Hz e bateria de 99.9Wh."},
{score:55,nome:"MSI Titan 18 HX 2027",categoria:"Portátil Gaming",fonte:"Listagem vazia em loja",probabilidade:"Baixa",ano:"2027",descricao:"Core Ultra 9 300HX + RTX 6090 24GB, 18\" 4K OLED 240Hz e 96GB DDR5."},{score:68,nome:"Samsung Galaxy S27 Ultra",categoria:"Smartphone",fonte:"Análise de supply chain",probabilidade:"Alta",ano:"2027",descricao:"Snapdragon 8 Elite 3, câmara de 200MP com IA, bateria de 5800mAh Si/C e ecrã LTPO 144Hz."},{score:65,nome:"Google Pixel 11 Pro",categoria:"Smartphone",fonte:"Fugas de software",probabilidade:"Média",ano:"2027",descricao:"Tensor G6 com melhor processamento de linguagem, câmera de 50MP e carregamento de 65W."},{score:72,nome:"OnePlus 14",categoria:"Smartphone",fonte:"Leak de hardware",probabilidade:"Alta",ano:"2027",descricao:"Snapdragon 8 Elite 3, bateria de 6500mAh Si/C e carregamento de 200W."},{score:78,nome:"Apple M5 Ultra",categoria:"Chip",fonte:"Análise de semicondutores",probabilidade:"Alta",ano:"2027",descricao:"GPU de 128 cores, CPU de 48 núcleos, unificado com 128GB de memória."},{score:60,nome:"Nintendo Switch 3",categoria:"Console",fonte:"Cadeia de fornecimento",probabilidade:"Média",ano:"2027",descricao:"Custom chip NVIDIA próxima geração, 16GB RAM, ecrã OLED de 7.5\" 144Hz."},{score:68,nome:"AMD Ryzen 9 270",categoria:"CPU",fonte:"Roadmap confirmado",probabilidade:"Alta",ano:"2027",descricao:"Zen 6 com 16 núcleos, PCIe 6.0 suportado, nova configuração de cache."},{score:72,nome:"Intel Core Ultra 9 590K",categoria:"CPU",fonte:"Fugas de OEM",probabilidade:"Média",ano:"2027",descricao:"Panther Lake refreshe, 24 núcleos, NPU de 60 TOPS, suporte a DDR6."},{score:50,nome:"PlayStation Portal 2",categoria:"Console",fonte:"Registos de patente",probabilidade:"Baixa",ano:"2027",descricao:"Versão portátil do PS5 com ecrã OLED de 8\" e controles integrados."},{score:92,nome:"Xiaomi 17 Ultra",categoria:"Smartphone",fonte:"Leak de câmera",probabilidade:"Alta",ano:"2027",descricao:"Snapdragon 8 Elite 3, câmara de 200MP Tetracore, bateria de 6500mAh Si/C."},{score:85,nome:"RTX 6090",categoria:"GPU",fonte:"Roadmap NVIDIA",probabilidade:"Alta",ano:"2027",descricao:"36GB GDDR8, 28000 CUDA cores, PCIe 6.0, TDP de 600W."},{score:72,nome:"Intel Core Ultra 9 590K",categoria:"CPU",fonte:"Imagens vazadas",probabilidade:"Média",ano:"2027",descricao:"Core Ultra 9 refreshe, 24 núcleos Performance + 8 núcleos Eficiente, NPU de 60 TOPS."},
{score:70,nome:"Apple iPhone Fold",categoria:"Smartphone",fonte:"Ming-Chi Kuo / Bloomberg",probabilidade:"Media",ano:"2026",descricao:"Primeiro dobravel da Apple com ecra de 7.8 polegadas e Touch ID lateral."},]

};

// Exportar para Node.js (require)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = data;
}