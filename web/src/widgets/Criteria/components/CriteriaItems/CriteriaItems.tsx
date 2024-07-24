import { FC } from 'react'
import styles from './CriteriaItems.module.css'
import { ICriteria } from '../../model/criteria'

interface IProps {
    criteriaItems: ICriteria
}

const CriteriaItems: FC<IProps> = (props) => {
    const { criteriaItems } = props
    const { title, icon, desc } = criteriaItems

    return (
        <div className={styles.criterion_container}>
            {icon}
            <h3 className={styles.title}>{title}</h3>

            <p className={styles.criterionText}>{desc}</p>
        </div>
    )
}

export default CriteriaItems
