import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Image} from './NavbarElements'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faDiscord, faMedium} from "@fortawesome/free-brands-svg-icons"
import '../Sidebar/icons.css'
import {animateScroll as scroll} from 'react-scroll';
import logo from '../Logos/logo.svg';
import {Button, Box} from "@material-ui/core"
import PopupDialog from "../Dialog"
import "./styles.css"

const Navbar = ({toggle}) => {

    const history = useHistory();

    const [scrollNav, setScrollNav] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const changeNav = () => {
         if(window.scrollY >= 80) {
             setScrollNav(true)}
             else{
             setScrollNav(false)
             }
         }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const goto = (url) =>() => {
        history.push(url);
    }

    const onDialogClose = () => {
        setOpenDialog(false);
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Image width="100" src={logo} alt="logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="benefits" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Utility</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="lore" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Lore</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="faq" smooth={true} duration={500} spy={true} exact='true' offset={-80}>FAQ</NavLinks>
                        </NavItem>
                        <a href="https://twitter.com/BountyHunterNFT" className="twitter social"> 
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                        <a href="https://discord.gg/YPDJGKWMNX" className="discord social"> 
                        <FontAwesomeIcon icon={faDiscord} size="1x" />
                        </a>
                        <a href="https://bountyhunterspaceguild.medium.com/" className="medium social"> 
                        <FontAwesomeIcon icon={faMedium} size="1x" />
                        </a>
                        <Button variant="contained" style={{textTransform: 'none', marginLeft: 60, backgroundColor: 'orange'}} onClick={goto("connectwallet")}>
                            <b>My Residences</b>
                        </Button>
                        <Button variant="contained" style={{textTransform: 'none', marginLeft: 30, backgroundColor: '#8c1aff'}} onClick={()=>setOpenDialog(true)}>
                            <b>Buy a Residences</b>
                        </Button>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <PopupDialog
                open={openDialog}
                onClose={onDialogClose}
                title={"Buy a Residence"}
                titleStyle={{color: 'white'}}
            >
                <Box className="dialog-container">
                    <Box style={{marginBottom: 50}}>We support multiple marketplaces, select one below</Box>
                    <Button variant="contained" fullWidth={true} className="item-btn btn-purple" component={"a"} href="https://solanart.io/collections/thetower" target="_blank">Sloanart</Button>
                    <Button variant="contained" fullWidth={true} className="item-btn btn-pink"  component={"a"} href="https://magiceden.io/marketplace/the_tower"  target="_blank">Magic Eden</Button>
                    <Button variant="contained" fullWidth={true} className="item-btn btn-yellow"  component={"a"} href="https://exchange.art/collections/The%20Tower"  target="_blank">Exchange.Art</Button>
                    <Button variant="contained" fullWidth={true} className="item-btn btn-black"  component={"a"} href="https://alpha.art/collection/the-tower"  target="_blank">Alpha.Art</Button>
                </Box>
            </PopupDialog>
        </>
    )
}

export default Navbar;
