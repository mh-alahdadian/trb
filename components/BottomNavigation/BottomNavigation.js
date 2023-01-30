import React from 'react'
import styles from './BottomNavigation.module.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// This is a DEMO ButtomNavigation component and it does not work!

const navItems = [
    {
        title: 'ترب من',
        iconComponent: PersonOutlineOutlinedIcon,
    },
    {
        title: 'پیشنهاد ویژه',
        iconComponent: LocalOfferOutlinedIcon,
    },
    {
        title: 'دسته بندی ها',
        iconComponent: CategoryOutlinedIcon,
    },
    {
        title: 'جستجو',
        iconComponent: SearchOutlinedIcon,
    },

]

function BottomNavigation() {
    return (
        <div className={styles.BottomNavigation_RelativeSpacing}>
            <div className={styles.BottomNavigation}>
                {
                    navItems.map((item, index) => {
                        const Icon = item.iconComponent;
                        return (
                            <div className={styles.navItem} key={index}>
                                <Icon />
                                <div className={styles.navItemTitle}>
                                    {item.title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BottomNavigation;