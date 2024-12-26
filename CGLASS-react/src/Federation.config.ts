export const federationConfig = {
    name: 'CGLASS-react',
    filename: 'remoteEntry.js',
    exposes: {
       './axiosInterceptor': './src/services/axiosInterceptor.ts'
    },
    remotes:{
      remote : 'http://localhost:5003/assets/remoteEntry.js'
    },
    shared: ['react', 'react-dom', 'axios'],
}

