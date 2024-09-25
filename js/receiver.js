const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

/**
 * Enable debug log from Google Cast SDK
 */

context.setLoggerLevel(cast.framework.LoggerLevel.DEBUG);

const iframeContainer = document.getElementById('iframeContainer');

// Custom message namespace
const NAMESPACE = "urn:x-cast:es.offd.tokenviewer";

context.addCustomMessageListener(NAMESPACE, function(event) {
    const url = event.data.url;
    if (url) {
        // Create and set up the iframe
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.allow = "autoplay; fullscreen";
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        
        // Clear previous content and append the new iframe
        iframeContainer.innerHTML = '';
        iframeContainer.appendChild(iframe);
    }
});

// Start the receiver
context.start();