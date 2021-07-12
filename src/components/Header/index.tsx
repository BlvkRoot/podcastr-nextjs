import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'

import headerStyles from './styles.module.scss';

import Image from 'next/image';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })
    
    return (
        <header className={headerStyles.headerContainer}>
            <Image src="/logo.svg" alt="Podcastr" height={100} width={100}/>

            <p> O melhor para você ouvir, sempre.</p>

            <span> { currentDate }</span>
        </header>
    )
}