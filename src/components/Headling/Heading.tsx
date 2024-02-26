import { HeadingProps } from "./Heading.props";
import cn from 'classnames';
import styles from './Heading.module.css';


export default function Heading({children, className, ...props}:HeadingProps){
    return <h1 className={cn(className, styles['h1'])} {...props}>{children}</h1>
}