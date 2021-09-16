import makePDF from "./makePDF";
import variables from "./sample.json"
import {zBClient} from "./zeebeWorker";

process.on( 'SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    console.log('Closing any worker client running...')
    zBClient.close().then(() => console.log('All workers closed'))
    process.exit( );
})

makePDF(variables)
