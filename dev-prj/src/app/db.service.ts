import {Injectable} from "@angular/core";

@Injectable()
export class DbService{
    menu = [{
        title:"Обо мне",
        href:'#1',
        image:'url(../../../assets/images/menu-images/about-me.jpg)',
        description:'В данном разделе вы можете получить краткую информацию обо мне.'
    }, {
            title:"Обратная связь",
            href:'#2',
            image:'url(../../../assets/images/menu-images/feedback.png)',
            description:'Вы можете связаться со мной заполнив контактную форму.'
        },
        {
            title:"Навыки",
            href:'#3',
            image:'url(../../../assets/images/menu-images/skills.jpg)',
            description:'В данном разделе перечислены мои общие навыки программировани.'
        },
        {
            title:"Опыт работы",
            href:'#4',
            image:'url(../../../assets/images/menu-images/portfolio.jpg)',
            description:'Вы можете ознакомится с моим опытом работы, прямо у нас на сайте.'
        }
    ];
}