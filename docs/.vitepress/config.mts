import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '大模型入门',
  description: '面向所有人的大语言模型入门教程',
  base: '/llm-for-everyone/',

  themeConfig: {
    nav: [
      { text: '神经网络基础', link: '/00-neural_network/01-what-is-neural-network' },
      { text: '推理过程', link: '/01-inference/01-overview' },
      { text: '参考资料', link: '/references/embedding' },
    ],

    sidebar: {
      '/00-neural_network/': [
        {
          text: '神经网络基础',
          items: [
            { text: '神经网络是什么', link: '/00-neural_network/01-what-is-neural-network' },
            { text: '神经元、层和激活函数', link: '/00-neural_network/02-neuron-layer-and-activation' },
            { text: '前向传播是什么', link: '/00-neural_network/03-forward-pass' },
            { text: '损失函数是什么', link: '/00-neural_network/04-loss-function' },
            { text: '梯度下降是什么', link: '/00-neural_network/05-gradient-descent' },
            { text: '反向传播是什么', link: '/00-neural_network/06-backpropagation' },
            { text: '训练循环是什么', link: '/00-neural_network/07-training-loop' },
            { text: '本章小结', link: '/00-neural_network/08-summary' },
          ],
        },
      ],
      '/01-inference/': [
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
      ],
      '/references/': [
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
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JackieAnxis/llm-for-everyone' },
    ],
  },
})
