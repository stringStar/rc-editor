import React,{Component} from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import './index.less';

let content = '',
    lastEditRange,
    LastPos;

export default class Ueditor extends Component {
    static propTypes = {
        content: PropTypes.string
    }
    changeContent = (evt) => {
        console.log(evt.keyCode);
    }
    saveFocusIndex = () =>{
        var selection = window.getSelection();
        lastEditRange = selection.getRangeAt(0);
    }
    
    componentDidUpdate() {

    }
    componentWillMount() {
        content = this.props.content;
    }
    paste = (evt) => {
        
    }
    canChange = (str) => {
        // this.refs.editArea.innerHTML = str;
        document.getElementsByClassName('editArea').innerHTML = str;
    }
    componentWillReceiveProps(nextProps) {
       this.canChange(nextProps.content);
    }
    checkedEonticons = (ele) => {
        if(lastEditRange == undefined ||
            lastEditRange.commonAncestorContainer != this.refs.editArea &&
            lastEditRange.commonAncestorContainer &&
            lastEditRange.commonAncestorContainer.parentElement != this.refs.editArea) {
            this.refs.editArea.innerHTML += ele;
            // const {getChildValue} =  this.props;
            // getChildValue(this.refs.editArea);
            return;
        }
        var range = lastEditRange;
        var sel = window.getSelection();
        range.deleteContents();
        // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)
        var el = document.createElement("div");
        el.innerHTML = ele;

        var frag = document.createDocumentFragment(),
            node, lastNode;
        while ((node = el.firstChild)) {
            lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);
        console.log(range);
        if (lastNode) {
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            console.log(lastNode)
            console.log(range);
            var textNode = range.startContainer;
            range.setStart(textNode, range.startOffset - 2)
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
        // this.saveFocusIndex();
    }

    render() {
        const {
            changeContent,
            paste, 
            change,
        } = this.props;
        
        return (
                <div className='editArea' 
                    onClick={this.saveFocusIndex} 
                    onBlur={this.saveFocusIndex}
                    onKeyUp={(evt) => changeContent(evt.target)} 
                    onPaste={paste} 
                    dangerouslySetInnerHTML={{__html: content}} 
                    contentEditable={true}
                    ref={'editArea'}
                    >
                </div>
                        
        );
    }
}
