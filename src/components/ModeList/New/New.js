import React from 'react';
import PropTypes from 'prop-types';
import {compose,withProps,getContext} from 'recompose';
import WishList from '../../WishList';



const enhance = compose(
    withProps((props)=>({
        arrListNew:props.toDoList.filter(item=>(!item.isDone))
    }))
)

const ComponentNew = enhance(({arrListNew})=>
        <WishList arrList={arrListNew} />
)

const New = getContext({toDoList:PropTypes.array})(ComponentNew);

export default New;