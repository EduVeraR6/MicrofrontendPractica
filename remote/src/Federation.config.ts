export const federationConfig = {
    name: 'remote',
    filename: 'remoteEntry.js',
    exposes: {
        './pages/Home' : './src/pages/Home'
    },
    remotes:{
      'CGLASS-react': 'http://localhost:5173/assets/remoteEntry.js'  // URL del host
    },
    shared: ['react', 'react-dom', 'axios']
}