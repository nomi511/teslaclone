import React from 'react'
import {Text, View, ImageBackground} from 'react-native'
import StyledButton from '../styledButton'
import styles from './styles'

const CarItem = (props) => {

    const {title, taggline, tagglineCTA, image} = props.car

    return ( 

        <View style={styles.carContainer}>

            <ImageBackground 
            source={image} 
            style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>
                    {taggline}
                    {' '}
                    <Text style={styles.tagglineCTA}>{tagglineCTA}</Text>
                    </Text>
            </View>

            <View style={styles.buttoncontainer}>

                <StyledButton 
                    type='primary' 
                    content={'custom order'} 
                    onPress={()=> console.log('custom order clicked')}
                />

                <StyledButton 
                    type='secondary' 
                    content={'existing inventory'} 
                    onPress={()=> console.log('cexisting inventory clicked')}
                />

            </View>

            

        </View>

     );
}
 
export default CarItem;