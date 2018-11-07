

export default {
  targets: {
    ie: 10,
  },
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: true,
      title: 'Alkaids.github.io',
      fastClick: true,
      library: 'react'
    }],
  ]
}
