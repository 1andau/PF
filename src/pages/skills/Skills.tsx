import { useCallback, useState } from 'react';
import { SkillBox } from './Skillbox';
import { DestinationTitle, MainContainer } from '../../GlobalStyles';
import { skills } from './data';
import { Cards, Education } from 'pages/styled';
import { CategoryContainer } from 'pages/styled';

export const Skills = () => {
  const [category] = useState<string[]>([...new Set(skills.map((value) => value.type))]);
  const [activeTab, setActiveTab] = useState(category[0]);


  const handleTabClick = useCallback((name: string) => {
    setActiveTab(name);
  }, []);

  return (
      <MainContainer>
      <DestinationTitle>
        <span>04</span>
        <h1>Chapter.Skills and Education.</h1>
      </DestinationTitle>






{/* <Education>
    <h4>Education</h4>
  <div className="education__content">
    <h5>National University of Computer & Emerging Sciences, Lahore</h5>
    <span className="year"> 2018</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis.</p>
  </div>

  <div className="education__content">
  <h5>National University of Computer & Emerging Sciences, Lahore</h5>
    <span className="year"> 2018</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis.</p>
  </div>

  <div className="education__content">
  <h5>National University of Computer & Emerging Sciences, Lahore</h5>
    <span className="year"> 2018</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis.</p>
  </div>


  <h4>Work expiriens</h4>
  <div className="education__content">
    <h5>National University of Computer & Emerging Sciences, Lahore</h5>
    <span className="year"> 2018</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis.</p>
  </div>
</Education> */}


<h4>Skills</h4>
<div className="block">
<ul>
<CategoryContainer>
        
            {category.map((value) => (
              <label
                onClick={() => handleTabClick(value)}
                className={activeTab === value ? 'active' : ''}
                key={value}>
                <span>{value}</span>
              </label>
            ))}
        </CategoryContainer>
        </ul>
        <Cards>
          {skills
            .filter((value) => value.type === activeTab)
            .map((value) => (
              <>
                <SkillBox
                  title={value.title}
                  icon={value.icon}
                  isMainSkill={value.isMainSkill}
                  key={value.title}
                />
              </>
            ))}
        </Cards>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus consequatur sint, voluptatibus, consectetur earum modi repellat odio perferendis delectus, placeat veritatis magni. Ipsa quis dolores assumenda ad accusantium aut incidunt voluptate ex iusto vero natus molestias labore ducimus suscipit repellat, culpa voluptates quibusdam esse voluptatem minima! Quaerat sunt sit reiciendis facere consequatur iure expedita, inventore laborum perspiciatis eveniet animi ratione iste id officia rem provident harum ea et nemo nisi delectus incidunt. Nesciunt repellat similique, perspiciatis in harum quidem aspernatur deleniti ipsam excepturi iste nam impedit obcaecati mollitia, vero commodi et nostrum minima expedita odit aut aperiam! Rem aliquam, quibusdam perferendis distinctio enim iste vel praesentium repellendus odit quam. Ab deleniti sint, ut nam consequuntur magnam modi fugit nobis totam. Amet corrupti tempora doloribus officia, dolor vero magnam quos quae ab repellat? Ipsa ipsam aliquid nemo laudantium eius odio. Dolor, ducimus molestiae magni iure ea quaerat expedita sequi eaque voluptate doloribus a, illo ratione optio quidem quas velit mollitia, amet numquam sit adipisci! Enim delectus repellat modi non ex veniam asperiores minus dolorem exercitationem officiis nisi debitis placeat, expedita nihil aspernatur quae, ut numquam a obcaecati maiores eveniet est tenetur. Mollitia ratione rerum accusantium magni quod. Necessitatibus delectus veniam, unde quas repellat earum fuga dolore numquam alias id ipsam amet hic minus blanditiis eligendi inventore cum exercitationem at, nobis suscipit incidunt laudantium ab corporis? Iusto repudiandae blanditiis eius iure iste, omnis fugit error nemo odio? Ducimus nobis doloremque aut, ipsum eligendi aperiam facere assumenda voluptatibus mollitia, veritatis dolorum suscipit illum modi, sit obcaecati molestias blanditiis. Mollitia, nisi! Neque id, odio molestias delectus cum consequatur. Maiores voluptatibus at dolores. Provident perspiciatis, praesentium dolorem similique quisquam vel saepe hic sunt aperiam earum impedit nesciunt temporibus, cum ipsam aliquam facere quia aspernatur quasi dolor voluptas repellat! Non fugit quo magnam consequuntur voluptates officia praesentium, qui ad nihil aliquid unde saepe? Expedita dolor cupiditate modi quod iure vero aperiam possimus harum minima, rem quae, corrupti et maxime autem porro in nesciunt iste culpa sed ullam, quo voluptates suscipit. Modi officiis similique sint beatae dolores. Quia molestias deserunt et praesentium porro voluptate adipisci labore impedit quasi accusamus architecto at fugiat quos sapiente ut vero ad necessitatibus harum suscipit ab dolorem earum, amet qui repellendus? Aliquid quam necessitatibus reiciendis, beatae nam sapiente quisquam aspernatur sint, magnam sunt delectus eius perferendis neque dolore laudantium ea, est nesciunt vel nisi ducimus recusandae quo. Beatae placeat labore eos sit, alias esse fugit iusto? Cum commodi et saepe natus ducimus eligendi dicta voluptate quis porro placeat quia eaque sequi a, sit sed possimus provident in ipsa necessitatibus numquam unde corporis? Fugiat, recusandae fugit nulla, hic harum, assumenda corrupti ab ducimus corporis esse quae illo dolore culpa praesentium provident magnam. Sint quasi minima suscipit tenetur placeat. Perferendis eaque ad ex quos quas sed autem, porro, debitis a libero facilis. A perspiciatis cum quos, vero, corrupti maiores quaerat dolores molestias error, non sint. At labore numquam recusandae neque quo non consectetur suscipit, perferendis dicta ad excepturi est fugiat qui! Pariatur laboriosam assumenda quidem. Iste accusamus illum, inventore laudantium dolore eaque placeat vero, odit ipsa nostrum distinctio necessitatibus tenetur! Velit, fuga! Cupiditate impedit consectetur iste similique a doloremque praesentium sequi dolorem incidunt exercitationem hic quisquam tempora, perspiciatis maiores porro provident minima repellendus totam nisi veritatis eveniet sunt dolor harum. Recusandae temporibus, aut voluptatibus dolorum maxime quisquam pariatur, laboriosam sed magni sunt et consectetur blanditiis dolore quibusdam ullam natus neque incidunt quis delectus facere. Quae fugiat officia eum molestiae exercitationem? Eos reiciendis suscipit excepturi aut, velit eaque similique quas voluptatem facilis cum consequuntur dolorem qui harum sapiente assumenda nisi dolorum doloremque ipsa placeat nesciunt? Quia aspernatur, ratione repellat rem magni eligendi quidem at tenetur qui excepturi vel molestiae? Reprehenderit temporibus commodi nesciunt perspiciatis eligendi ratione iure natus reiciendis alias aliquid error quisquam dolorem voluptates obcaecati, quia quod, consectetur fugiat ipsam, rerum sed eos! Perferendis, maiores vel voluptatum, asperiores suscipit dicta dolores recusandae ex provident rem libero labore obcaecati incidunt ab. Fugiat repellendus accusamus dicta quia neque, ducimus eum veniam ipsa mollitia adipisci, incidunt officia aut provident atque. Neque, excepturi unde maxime cumque eum repudiandae consequuntur debitis quidem commodi eos consequatur nostrum, sequi veniam dicta voluptates impedit quisquam, architecto illo ab. Eligendi excepturi voluptatibus modi odio fugiat dignissimos totam est quo error ullam iure consequatur laborum, praesentium voluptatum corporis natus velit eaque obcaecati magnam. Est facere dolor veniam, dolorem vel consequatur magnam aperiam nostrum architecto, sapiente nobis doloremque a necessitatibus tenetur voluptate maxime cupiditate voluptatibus quam natus repudiandae eligendi et ex debitis quae. Voluptatibus commodi pariatur rerum similique hic odio laudantium doloremque explicabo, accusamus eum libero magnam et excepturi laboriosam fuga distinctio amet voluptates. Modi numquam aut quaerat deserunt suscipit quas nihil animi quibusdam non, debitis vel officiis distinctio in enim sequi a voluptatibus. A minus pariatur eius neque quod doloribus, alias itaque obcaecati dolorem et sunt eum veritatis eaque reiciendis. Reiciendis, nostrum, quidem commodi iste animi laboriosam temporibus ducimus pariatur dolores amet obcaecati id et debitis nisi? Ipsa perspiciatis harum recusandae neque, quas voluptatem aspernatur odio nihil. Odit deserunt labore accusamus mollitia excepturi ipsa laborum officiis ipsam voluptatibus vitae, quisquam facere fugit doloribus. Fugit quasi ipsum omnis expedita libero, ducimus dolore in consectetur eligendi nulla, tempora animi iure ea soluta id repellendus ab facere enim, eos consequuntur! Obcaecati odit ut excepturi nesciunt voluptate quaerat illum laborum molestias eaque eveniet exercitationem inventore non voluptas similique sunt optio quam, assumenda, soluta iusto fuga qui dolorum saepe! Maxime maiores quibusdam, itaque soluta magni pariatur aliquid tempore, quod cum exercitationem corporis illum facilis? Veritatis, nobis perferendis aut nihil maiores voluptates reprehenderit sed quis ad quibusdam quo ea adipisci excepturi modi laborum itaque sint laboriosam? Optio laudantium dignissimos molestias earum alias quibusdam corrupti quas voluptas beatae maiores ab quo, nulla aliquam reiciendis cum expedita ex. Hic incidunt, ducimus deleniti fugiat perferendis exercitationem deserunt, odit porro, totam illum nisi eum provident earum repellendus modi ipsam necessitatibus tempora optio quis nam suscipit? Libero nesciunt eum labore, incidunt reprehenderit a corrupti numquam natus, odit officiis, unde esse soluta recusandae doloribus repudiandae eligendi?</p>
</div>

      </MainContainer>

  );
};
