export default [
      {
        _name: 'CSidebarNavItem',
        name: 'Статистика',
        to: '/dashboard',
        icon: 'cil-speedometer',
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Здоровье'],
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Карта здоровья',
        to: '/healthmap',
        icon: 'cil-speedometer',
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Мед. Услуги',
        icon: 'cil-cursor',
        roles: ['patient'],
        items: [
          {
            name: 'Он-лайн консультации',
            to: '/#'
          },
          {
            name: 'Запись к специалисту',
            to: '/#'
          },
          {
            name: 'Вызов врача',
            to: '/#'
          },
          {
            name: 'Процедуры на дому',
            to: '/#'
          }
        ]
      },


      {
        _name: 'CSidebarNavTitle',
        _children: ['Образование и труд'],
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Карта компетенций',
        to: '/educationmap',
        icon: 'cil-speedometer',
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Образование',
        icon: 'cil-cursor',
        roles: ['patient'],
        items: [
          {
            name: 'Он-лайн образование',
            to: '/#'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Трудоустройство',
        icon: 'cil-cursor',
        roles: ['patient'],
        items: [
          {
            name: 'Поиск вакансий',
            to: '/#'
          }
        ]
      },



      {
        _name: 'CSidebarNavTitle',
        _children: ['Физкультура и спорт'],
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Карта физической активности',
        to: '/activemap',
        icon: 'cil-speedometer',
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Сервисы',
        icon: 'cil-cursor',
        roles: ['patient'],
        items: [
          {
            name: 'Спортивные секции',
            to: '/#'
          },
          {
            name: 'Программы реабилитации',
            to: '/#'
          },
          {
            name: 'Командные виды спорта',
            to: '/#'
          }
        ]
      },



      {
        _name: 'CSidebarNavTitle',
        _children: ['Социализация'],
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Карта социализации',
        to: '/Socialmap',
        icon: 'cil-speedometer',
        roles: ['patient']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Сервисы',
        icon: 'cil-cursor',
        roles: ['patient'],
        items: [
          {
            name: 'Социальные услуги',
            to: '/#'
          },
          {
            name: 'Услуги по транспортировке',
            to: '/#'
          },
          {
            name: 'Протезы и оборудование',
            to: '/#'
          },
          {
            name: 'Справки и документы',
            to: '/#'
          }
        ]
      }
    ]
