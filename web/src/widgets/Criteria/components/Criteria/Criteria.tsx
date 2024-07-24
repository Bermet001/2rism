import CriteriaItems from '../CriteriaItems/CriteriaItems'
import styles from './Criteria.module.css'
import LocationIco from '../../assets/ico/location.svg'
import FireIco from '../../assets/ico/fire.svg'
import GiftIco from '../../assets/ico/gift.svg'
import DefenseIco from '../../assets/ico/defense.svg'
import { ICriteria } from '../../model/criteria'

const Criteria = () => {
    const criteria: ICriteria[] = [
        {
            icon: <LocationIco />,
            title: 'Wide Selection of Tours',
            // eslint-disable-next-line max-len
            desc: 'With over 20 travel agencies offering their tours on our platform, you can find and book a trip that perfectly suits your interests and budget.',
        },

        {
            icon: <DefenseIco />,
            title: 'Safety and Reliability',
            // eslint-disable-next-line max-len
            desc: 'We thoroughly vet all agencies and tours to ensure your safety and high-quality service. Your data is protected, and all bookings are secure.',
        },

        {
            icon: <GiftIco />,
            title: 'Exclusive Deals',
            // eslint-disable-next-line max-len
            desc: 'Gain access to special offers and discounts available exclusively on our platform. Enjoy significant savings and unique promotions',
        },

        {
            icon: <FireIco />,
            title: 'Personalized Recommendations',
            desc: 'Receive tour and route recommendations based on your interests and preferences, making your trip even more memorable.',
        },
    ]

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Why book with ELGid?</h2>

            <div className={styles.criteria_contaiter}>
                {criteria.map((item, i) => (
                    <CriteriaItems key={i} criteriaItems={item} />
                ))}
            </div>
        </div>
    )
}

export default Criteria
