import { defineConfig } from 'vitepress'
import { katex as katexPlugin } from '@mdit/plugin-katex'

export default defineConfig({
  lang: 'zh-CN',
  title: '大模型入门',
  description: '面向所有人的大语言模型入门教程',
  base: '/llm-for-everyone/',
  cleanUrls: true,

  markdown: {
    config: (md) => {
      md.use(katexPlugin, { mathFence: true })
    },
  },

  themeConfig: {
    nav: [
      { text: '开始阅读', link: '/00-neural_network/00-overview' },
    ],

    sidebar: [
      {
        text: '神经网络基础',
        items: [
          { text: '神经网络是什么', link: '/00-neural_network/00-overview' },
          { text: '神经网络如何完成预测', link: '/00-neural_network/01-basic-concepts' },
          { text: '如何衡量神经网络的好坏', link: '/00-neural_network/02-loss-function' },
          { text: '如何训练一个神经网络', link: '/00-neural_network/03-training-neural-network' },
          { text: '本章小结与练习', link: '/00-neural_network/04-summary-and-practice' },
        ],
      },
      {
        text: '推理过程',
        items: [
          { text: '推理过程概览', link: '/01-inference/01-overview' },
          { text: '套聊天模板', link: '/01-inference/02-apply_chat_template' },
          { text: 'Token 是怎么被切出来的', link: '/01-inference/03-tokenize' },
          { text: '模型如何预测下一个 token', link: '/01-inference/04a-token_predict_overview' },
          { text: 'Decoder Block 是什么', link: '/01-inference/04b-decoder_block' },
          { text: '采样一个 token', link: '/01-inference/05-token_sample' },
        ],
      },
      {
        text: '参考资料',
        items: [
          { text: 'Embedding 表长什么样', link: '/references/embedding' },
          { text: '最经典的做法：sinusoidal positional encoding', link: '/references/positional_encoding' },
          { text: '为什么需要 Self-Attention', link: '/references/self-attention' },
          { text: 'Feed Forward 在哪里', link: '/references/feed-forward' },
          { text: '为什么需要 Norm', link: '/references/norm' },
          { text: 'Logits 不是概率', link: '/references/logits' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JackieAnxis/llm-for-everyone' },
    ],
  },
})
