import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import hero from "../../assets/hero.png"
import skill1 from "../../assets/skill1.png"
import skill2 from "../../assets/skill2.png"
import skill3 from "../../assets/skill3.png"
const data = {
        meta:'welcome to my world',
        title:'Hi, I’m Jone Lee ',
        desc:'I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.third dimension by which to simplify experiences and kuiding thro each and every interaction.',
        image:hero,
        userSocial:{
            sect_social:'Find with me', 
            skillIcon:[
                {
                    icons:<FaFacebookF/>
                }, 
                {
                    icons:<FaInstagram/>
                },
                {
                    icons: <FaLinkedinIn/>
                }
            ]
        },
        userSkill:{
        sect_skill:'Best skill on',
        skillImage:[
            {
              image:skill1
            },
            {
                image:skill2,
            },
            {
                image:skill3
            }
        ],
        },
        
    }



export default data;