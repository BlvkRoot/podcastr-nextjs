import playerStyles from './styles.module.scss';

import Image from 'next/image';

export function Player() {
    return (
        <div className={playerStyles.playerContainer}>
            <header>
                <Image src="/playing.svg" alt="Tocando" height={35} width={35}/>
                <strong>Tocando agora</strong>
            </header>

            <div className={playerStyles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir.</strong>
            </div>

            <footer className={playerStyles.empty}>
                <div className={playerStyles.progress}>
                    <span>00:00</span>
                    <div className={playerStyles.slider}>
                        <div className={playerStyles.emptySlider} />
                    </div>
                    <span>00:00</span>
                </div>

                <div className={playerStyles.buttons}>
                    <button type="button">
                        <Image src="/shuffle.svg" alt="Embaralhar" height={25} width={25}/>
                    </button>

                    <button type="button">
                        <Image src="/play-previous.svg" alt="Tocar anterior" height={25} width={25}/>
                    </button>

                    <button type="button" className={playerStyles.playButton}>
                        <Image src="/play.svg" alt="Tocar" height={40} width={40}/>
                    </button>

                    <button type="button">
                        <Image src="/play-next.svg" alt="Tocar proxima" height={25} width={25}/>
                    </button>

                    <button type="button" className={playerStyles.playButton}>
                        <Image src="/repeat.svg" alt="Repetir" height={25} width={25}/>
                    </button>
                </div>
            </footer>
        </div>
    )
}