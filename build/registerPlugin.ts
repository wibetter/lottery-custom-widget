/**
 * @file 编辑器扩展, 增加自定义插件（组件物料面板展示需要）
 */
// @ts-ignore
import { registerPlugin } from 'vue3-aipage-widget';

const InfoCardPlugin = {
  name: '抽奖卡片',
  description: '抽奖自定义组件',
  componentId: 'uni-lottery-card',
  id: 'uni-lottery-card',
  tags: ['跨端组件'], // 组件分类
  pluginIcon: 'cards-plugin',
  order: 1, // 展示顺序（从小到大展示）
  type: 'element', // 渲染器类型
  device: ['mobile', 'app'], // 设置类型，目前支持3种类型: pc、mobile、app
  docLink: '',
  demoProperties: {
    componentId: 'uni-lottery-card',
    type: 'element',
    componentProperties: {
      data: {
        prizeList: [
          {
            name: 'iPhone13',
            value: 'iPhone',
            img: 'https://user-images.githubusercontent.com/11958920/184317722-f7a110f8-0084-4b6b-b49d-309ede05b14a.png',
          },
          {
            name: 'airPods3',
            value: 'airPods',
            img: 'https://user-images.githubusercontent.com/11958920/184317817-0d64d28d-20cf-4975-9a07-7a16e70f85bf.png',
          },
          {
            name: '行李箱',
            value: 'luggage',
            img: 'https://user-images.githubusercontent.com/11958920/184317875-20c2df50-6901-4364-b3c7-e086bb717a72.png',
          },
          {
            name: '风筒',
            value: 'dryer',
            img: 'https://user-images.githubusercontent.com/11958920/184317938-03c2cc33-948d-45e6-8eba-1b473966ea1e.png',
          },
          {
            name: '平行车',
            value: 'balanceCar',
            img: 'https://user-images.githubusercontent.com/11958920/184317959-9a38abd1-12da-43fa-b93a-eb3e0fbc1ed1.png',
          },
          {
            name: 'iPad5',
            value: 'iPad',
            img: 'https://user-images.githubusercontent.com/11958920/184317974-d0f9d220-b0eb-4596-9e9b-84767dee8b8c.png',
          },
        ],
      },
      style: {},
    },
  },
  panelControls: {
    type: 'tabs',
    tabs: [
      {
        title: '属性',
        controls: [
          {
            type: 'collapse',
            title: '数据',
            controls: [
              {
                name: 'data.prizeList',
                type: 'setting-list',
                label: false,
                hiddenOn: 'data.bindInfo && data.bindInfo.useDynamicData',
                setting: [
                  {
                    type: 'input-text',
                    name: 'name',
                    label: '奖品名称',
                    placeholder: '请输入奖品名称',
                  },
                  {
                    type: 'input-text',
                    name: 'value',
                    label: '奖品ID',
                    placeholder: '请输入奖品ID',
                  },
                  {
                    type: 'input-text',
                    name: 'img',
                    label: '奖品图片',
                    placeholder: '请输入奖品图片地址',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: '外观',
        controls: [
          {
            title: '布局',
            type: 'collapse',
            controls: [
              {
                type: 'button-icon-group',
                name: 'style.display',
                label: '显示',
                value: 'block',
                options: [
                  {
                    label: '块级(block)',
                    icon: 'block',
                    value: 'block',
                  },
                  {
                    label: '行内区块(inline-block)',
                    icon: 'inlineBlock',
                    value: 'inline-block',
                  },
                  {
                    label: '行内元素(inline)',
                    icon: 'inline',
                    value: 'inline',
                  },
                ],
              },
              {
                name: 'style',
                type: 'whSet',
                label: '宽度',
                options: [
                  {
                    label: '',
                    value: 'width',
                  },
                ],
              },
            ],
          },
          {
            type: 'collapse',
            title: '边距',
            controls: {
              name: 'style.box',
              type: 'boxModel',
              label: false,
            },
          },
        ],
      },
    ],
  },
};

// 注册自定义插件（aipage-editor组件物料面板需要）
registerPlugin(InfoCardPlugin);

export default InfoCardPlugin;
