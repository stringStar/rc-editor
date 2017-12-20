import React,{Component} from 'react';

import  './emotion.less'
import './emotionConf.less'
export default class Emotion extends Component {

    render() {
        const {
            emotions,
            clickEmotion,
        } = this.props;
        console.log(emotions);
        return (
            <div>
                {
                    emotions && emotions.map((k, index) => <span 
                        contentEditable='false'
                        key={'emotions'+index}
                        src={require('../../assets/images/spacer.gif')}
                        className={`emotion icon-emoticons${index} ${k}` }
                        onClick={clickEmotion}
                    >
                    </span>
                    
                   )
                }
            </div>
        );
    }
}