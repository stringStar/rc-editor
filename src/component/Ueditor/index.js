import React,{Component} from 'react';

import Emotion from './emotion'
import TextArea from './textArea'


export default class Ueditor extends Component {
    _clickEmotion = (evt) => { 
        let ele = evt.target;
        ele = this.domToStirng(ele);
        console.log(ele);
        this.refs.editAnswer.checkedEonticons(ele);
    }
    domToStirng = function (htmlDOM) {
        var div = document.createElement("div");
        div.appendChild(htmlDOM);
        return div.innerHTML;
    }


    render() {
        const {
            content,
            changeContent,
            change,
            emotions
        } = this.props;
        return (
            <div className="class-name">
                <Emotion emotions={emotions} 
                    content={content}
                    clickEmotion={this._clickEmotion}
                />
                <TextArea  
                    content={content} 
                    changeContent={changeContent} 
                    change={change} 
                    ref='editAnswer'
                />
            </div>
        );
    }
}