import { createEditorialSingleStory } from './EditorialSingleStory'

export default {
  title: 'Examples/Editorial Single Story',
  argTypes: {
    segments: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createEditorialSingleStory({ label, ...args })
}

export const EditorialSingleStory = Template.bind({})
EditorialSingleStory.args = {
  header: {
    title: `Photographers Tanya and Zhenya Posternak on Seeing a Frame from Two Different Angles`,
    subtitle: `12/7/2022 by Irene Ojo-Felix`,
    social: [
      {
        url: '/',
        logo: 'facebook'
      },
      {
        url: '/',
        logo: 'twitter'
      },
      {
        url: '/',
        logo: 'pinterest'
      }
    ],
    img: {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      imgCaption:
        '<p><a>Re-Edition Magazine A/W 22</a>&nbsp;| Courtesy of Tanya & Zhenya Posternak</p>'
    }
  },
  segments: [
    {
      type: 'text',
      content: `For twin photographer duo Tanya + Zhenya Posternak it's good to have two sets of eyes and perspectives on an image. The photography duo, originally from Kyiv, Ukraine, initially explored the world of media and production separately before making a name for themselves in the world of fashion and photography, taking stunningly creative photographs for the past decade. The Posternaks specialize in capturing the beauty of everyday life, often focusing on cities, people, and architecture, with an eye for detail that sets them apart from others. With their vast portfolio filled with clients like Vogue Italia, Re-Edition, and Pop Magazine, the Posternaks are steadily rising as two of the most sought-after photographers today. Models.com spoke briefly to them about their initial interestin the medium, their favorite muses, and the use of their talents to help process their feelings on the Russian invasion.`
    },
    {
      type: 'image',
      content: {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        imgCaption: '<a>Re-Edition Magazine A/W 22</a>&nbsp;| Courtesy of Tanya & Zhenya Posternak'
      }
    },
    {
      type: 'text',
      content: `<h2>For twin photographer duo Tanya + Zhenya Posternak</h2> it's good to have two sets of eyes and perspectives on an image. The photography duo, originally from Kyiv, Ukraine, initially explored the world of media and production separately before making a name for themselves in the world of fashion and photography, taking stunningly creative photographs for the past decade. The Posternaks specialize in capturing the beauty of everyday life, often focusing on cities, people, and architecture, with an eye for detail that sets them apart from others. With their vast portfolio filled with clients like Vogue Italia, Re-Edition, and Pop Magazine, the Posternaks are steadily rising as two of the most sought-after photographers today. Models.com spoke briefly to them about their initial interestin the medium, their favorite muses, and the use of their talents to help process their feelings on the Russian invasion.`
    },
    {
      type: 'text',
      content: `<h2>For twin photographer duo Tanya + Zhenya Posternak</h2> it's good to have two sets of eyes and perspectives on an image. The photography duo, originally from Kyiv, Ukraine, initially explored the world of media and production separately before making a name for themselves in the world of fashion and photography, taking stunningly creative photographs for the past decade. The Posternaks specialize in capturing the beauty of everyday life, often focusing on cities, people, and architecture, with an eye for detail that sets them apart from others. With their vast portfolio filled with clients like Vogue Italia, Re-Edition, and Pop Magazine, the Posternaks are steadily rising as two of the most sought-after photographers today. Models.com spoke briefly to them about their initial interestin the medium, their favorite muses, and the use of their talents to help process their feelings on the Russian invasion.`
    },
    {
      type: 'image',
      span: 6,
      content: {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        imgCaption: '<a>Re-Edition Magazine A/W 22</a>&nbsp;| Courtesy of Tanya & Zhenya Posternak'
      }
    },
    {
      type: 'image',
      span: 6,
      content: {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      }
    },
    {
      type: 'text',
      content: `<blockquote cite="/">
      "For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live."
      </blockquote>`
    },
    {
      type: 'text',
      content: `<strong>For twin photographer duo Tanya + Zhenya Posternak it's good to have two sets of eyes and perspectives on an image. The photography duo, originally from Kyiv, Ukraine, initially explored the world of media and production separately before making a name for themselves in the world of fashion and photography, taking stunningly creative photographs for the past decade. The Posternaks specialize in capturing the beauty of everyday life, often focusing on cities, people, and architecture, with an eye for detail that sets them apart from others. With their vast portfolio filled with clients like Vogue Italia, Re-Edition, and Pop Magazine, the Posternaks are steadily rising as two of the most sought-after photographers today. Models.com spoke briefly to them about their initial interestin the medium, their favorite muses, and the use of their talents to help process their feelings on the Russian invasion.</strong>`
    },
    {
      type: 'text',
      content: `For twin photographer duo Tanya + Zhenya Posternak it's good to have two sets of eyes and perspectives on an image. The photography duo, originally from Kyiv, Ukraine, initially explored the world of media and production separately before making a name for themselves in the world of fashion and photography, taking stunningly creative photographs for the past decade. The Posternaks specialize in capturing the beauty of everyday life, often focusing on cities, people, and architecture, with an eye for detail that sets them apart from others. With their vast portfolio filled with clients like Vogue Italia, Re-Edition, and Pop Magazine, the Posternaks are steadily rising as two of the most sought-after photographers today. Models.com spoke briefly to them about their initial interestin the medium, their favorite muses, and the use of their talents to help process their feelings on the Russian invasion.`
    }
  ],
  tagged: {
    title: 'Title',
    avatars: [
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      }
    ],
    buttonLabel: 'SEE MORE'
  },
  footer: {
    footerGroups: [
      {
        title: 'Popular in News',
        articles: [
          {
            size: 'small',
            imgSrc:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
            subtitle: 'Fashion'
          },
          {
            size: 'small',
            imgSrc:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
            subtitle: 'Fashion'
          }
        ]
      },
      {
        title: 'Next',
        articles: [
          {
            size: 'small',
            largeSpan: true,
            imgSrc:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
            subtitle: 'Fashion'
          }
        ]
      }
    ]
  }
}
