import React, { useContext } from 'react'
import { ImageSourcePropType, Text, SafeAreaView, Dimensions, View, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]


interface Props extends StackScreenProps<any, any> {};

export const SlideScreen = ({navigation}:Props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [show, setShow] = useState(false);

    const { fadeIn, opacity } = useAnimation();

    const { theme: { colors } } = useContext(ThemeContext);


    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'

                    }}
                />
                <View style={{bottom:'12%'}}>

                <Text style={[styles.title, {color:colors.primary}]}>{item.title}</Text>
                <Text style={[styles.subtitle, {color:colors.text,}]}>{item.desc}</Text>
                </View>
            </View>
        )
    }



    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.background,
                paddingTop: 50,
                // marginBottom:60
            }}
        >
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }) => renderItem(item)}//{({ item }) => renderItem(item))
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'

                onSnapToItem={(index) => {
                    setActiveIndex(index);
                    if(index===2){
                        setShow(true);
                        fadeIn();
                    }
                }}
            />

            <View style={{
                 flexDirection:'row',
                 justifyContent:'space-between' ,
                 alignItems:'center',
                 marginHorizontal:20
                 }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary
                    }}
                />
              

               {
               show && (
                <Animated.View style={{
                    opacity: opacity,
                }}
                >
               <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: colors.primary,
                    width: 130,
                    height: 45,
                    borderRadius: 10,
                    justifyContent:'center',
                    alignItems:'center'

                }}
                activeOpacity={0.8}
                onPress={()=>{
                    navigation.navigate('HomeScreen');

                }}
                    // startMovingPosition().start();
                >
                    <Text style={{
                        fontSize:25,
                        color:colors.card,


                    }}>Entrar</Text>
                    <Icon name='chevron-forward-outline' 
                    color={colors.card}
                    size={30}
                    />
                </TouchableOpacity>
                </Animated.View>
               )
               }

               
               
                
                
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subtitle: {
        fontSize: 16
    }

});

