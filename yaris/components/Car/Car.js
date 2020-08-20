import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import yaris1 from '../../assets/IMG_20200820_092815.jpg';
import yaris2 from '../../assets/IMG_20200820_092823.jpg';
import yaris3 from '../../assets/IMG_20200820_092848.jpg';
import yaris4 from '../../assets/IMG_20200820_092908.jpg';
import yaris5 from '../../assets/IMG_20200820_092912.jpg';
import yaris6 from '../../assets/IMG_20200820_092921.jpg';
import yaris7 from '../../assets/IMG_20200820_092926.jpg';
import yaris8 from '../../assets/IMG_20200820_092943.jpg';
import yaris9 from '../../assets/IMG_20200820_092955.jpg';
import yaris10 from '../../assets/IMG_20200820_093006.jpg';
import yaris11 from '../../assets/IMG_20200820_093020.jpg';
import yaris12 from '../../assets/IMG_20200820_093703.jpg';
import yaris13 from '../../assets/IMG_20200820_093721.jpg';
import yaris14 from '../../assets/IMG_20200820_093741.jpg';
import yaris15 from '../../assets/IMG_20200820_093813.jpg';
import yaris16 from '../../assets/IMG_20200820_093824.jpg';
import yaris17 from '../../assets/IMG_20200820_093840.jpg';
import yaris18 from '../../assets/IMG_20200820_093854.jpg';


import './Car.css';

const Car = (props) => {
    const imgs = [yaris1, yaris2, yaris3, yaris4, yaris5, yaris6, yaris7, yaris8, yaris9, yaris10,
    yaris11, yaris12, yaris13, yaris14, yaris15, yaris16, yaris17, yaris18].map(foto => {
        return (
        <div>
            <img alt="" src={foto} className="Image"/>
        </div>
        );
    });

    return (
        <div className="Car">
            <h1 style={{ textAlign: 'center' }}>Sprzedam Toyotę Yaris 1.0</h1>

            <ExpansionPanel className="Panel" defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="Heading">Opis samochodu:</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Details">
                    <Typography className="List">
                    <ul className="Features">
                        <li>silnik 1.0 benzyna</li>
                        <li>przebieg: 167200 km</li>
                        <li>kolor srebrny metalik</li>
                        <li>klimatyzacja manualna</li>
                        <li>poduszki powietrzne dla kierowcy i pasażera</li>
                        <li>ABS</li>
                        <li>radio z CD</li>                        
                        <li>data pierwszej rejestracji 24.12.2003, kupiony w polskim salonie, jestem trzecim właścicielem (od czerwca 2013)</li>
                        <li>ważne badania techniczne do sierpnia 2021 i OC do lipca 2021</li>
                        <li>co roku przegląd, wymiana oleju i filtrów oraz wykonywane wszelkie naprawy eksploatacyjne</li>
                        <li>w listopadzie 2018 wymieniony akumulator</li>
                        <li>w pakiecie opony zimowe/letnie</li>
                    </ul>
                    usterki:
                    <ul className="Features">    
                        <li>ma delikatne problemy blacharskie - korozja</li>
                        <li>nie działa tylni spryskiwacz szyb</li>
                    </ul> 
                    Cena: 5500 zł
                  </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className="Panel">
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="Heading">Kontakt:</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Details">
                    <Typography className="List">
                        <ul className="Features">
                            <li>email: <a href="mailto:rzubala@gmail.com" className="Link">Rafał Zubala</a></li>
                            <li>telefon: +48 506 515 655</li>
                        </ul>
                        
                  </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className="Panel" defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="Heading">Galeria:</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Details">
                    <div className="Gallery">
                        <Carousel autoPlay showArrows={true}>
                            {imgs}
                        </Carousel>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Car;