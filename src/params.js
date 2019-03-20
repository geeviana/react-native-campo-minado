import { Dimensions } from 'react-native'


const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Tamanho do painel superior na tela do celular
    difficultLevel: 0.1,
    getColumnsAmount(){ // Realiza o calculo do tamano da tela do celular e divide pelo tamanho de cada campo (30)
        const width = Dimensions.get('window').width
        return Math.floor(width/this.blockSize)
    },

    getRowsAmount(){// Realiza o calculo da larguta da tela e divide pelo tamanho de cada campo(30) 
        const totalHeight = Dimensions.get('window').height
        const boardHeght =  totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeght / this.blockSize) 
    }
}

export default params