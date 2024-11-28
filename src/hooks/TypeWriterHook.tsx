import {useState, useEffect} from 'react';
interface TypeWriterProps {
    speed: number;
    texts: string[];
}
const TypeWriter = ({texts, speed}: TypeWriterProps):string => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    
    useEffect(()=> {
        // let typeInterval: ReturnType<typeof setTimeout>;)
        if (texts.length === 0) return;
        
        if(index < texts.length) {
            const currentText = texts[index];

            if(charIndex < currentText.length) {
                const typeInterval = setTimeout(() => {
                    setDisplayText(prevText => prevText + currentText.charAt(charIndex));
                    setCharIndex(prevCharIndex => prevCharIndex + 1);
                }, speed);
            
                return () => clearTimeout(typeInterval);
            } else {
                const nextTextInterval = setTimeout(()=> {
                    setIndex(prevIndex => (prevIndex + 1)% texts.length);
                    setCharIndex(0);
                    setDisplayText('');
                }, speed * 2);
                return () => clearTimeout(nextTextInterval);
            }
        }
    }, [charIndex, index, speed, texts]);
    return displayText;
}
export default TypeWriter;