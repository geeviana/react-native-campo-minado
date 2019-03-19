import { Dimensions } from 'react-native'


const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Tamanho do painel superior na tela do celular
    difficultLevel: 0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width/this.blockSize)
    },

    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardHeght =  totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeght / this.blockSize) 
    }
}

export default params