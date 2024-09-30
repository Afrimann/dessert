import { StaticImageData } from "next/image"
import tiramisu from '@/app/images/image-tiramisu-desktop.jpg'
import waffle from '@/app/images/image-waffle-desktop.jpg'
import creme from '@/app/images/image-creme-brulee-desktop.jpg'
import brownie from '@/app/images/image-brownie-desktop.jpg'
import bakiava from '@/app/images/image-baklava-desktop.jpg'
import panna from '@/app/images/image-panna-cotta-desktop.jpg'
import cake from '@/app/images/image-cake-desktop.jpg'
import merinque from '@/app/images/image-meringue-desktop.jpg'
import macaron from '@/app/images/image-macaron-desktop.jpg'

interface ProductProps{
    id: number
    image: StaticImageData
    name: string
    desc: string
    price: string

}
export const ProductItems:ProductProps[] = [
    {
        id: 1,
        image: waffle,
        name: 'Waffle',
        desc: 'Waffle with Berries',
        price: 6.50.toFixed(2)
    },
    {
        id: 2,
        image: creme,
        name: 'Creme Brulee',
        desc: 'Vanilla Bean Creme Brulee',
        price: 7.00.toFixed(2)
    },
    {
        id: 3,
        image: macaron,
        name: 'Macaron',
        desc: 'Macaron Mix of Five',
        price: 8.00.toFixed(2)
    },
    {
        id: 4,
        image: tiramisu,
        name: 'Tiramisu',
        desc: 'Classic Tiramisu',
        price: 5.50.toFixed(2)
    },
    {
        id: 5,
        image: bakiava,
        name: 'Bakiava',
        desc: 'Pistachio Bakiava',
        price: 4.00.toFixed(2)
    },
    {
        id: 6,
        image: merinque,
        name: 'Pie',
        desc: 'Lemon Merinque Pie',
        price: 5.00.toFixed(2)
    },
    {
        id: 7,
        image: cake,
        name: 'Cake',
        desc: 'Red Velvet Cake',
        price: 4.50.toFixed(2)
    },
    {
        id: 8,
        image: brownie,
        name: 'Brownie',
        desc: 'Salted Caramel Brownie',
        price: 5.50.toFixed(2)
    },
    {
        id: 9,
        image: panna,
        name: 'Panna Cotta',
        desc: 'Vanilla Panna Cotta',
        price: 6.50.toFixed(2)
    }
]
export default ProductItems