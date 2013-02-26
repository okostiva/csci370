(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: true,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '2',
      INTERACTION_TIMER: '3',
      INTERACTIVE_IMPRESSION: '4',
      FULL_SCREEN_VIDEO_PLAYS: '5',
      FULL_SCREEN_VIDEO_COMPLETES: '6',
      FULL_SCREEN_AVERAGE_VIEW_TIME: '7',
      MANUAL_CLOSE: '8',
      BACKUP_IMAGE_IMPRESSION: '9',
      EXPAND_TIMER: '10',
      VIDEO_PLAY: '11',
      VIDEO_VIEW_TIMER: '12',
      VIDEO_COMPLETE: '13',
      VIDEO_INTERACTION: '14',
      VIDEO_PAUSE: '15',
      VIDEO_MUTE: '16',
      VIDEO_REPLAY: '17',
      VIDEO_MIDPOINT: '18',
      FULL_SCREEN_VIDEO: '19',
      VIDEO_STOP: '20',
      VIDEO_UNMUTE: '21',
      FULL_SCREEN: '22',
      DYNAMIC_CREATIVE_IMPRESSION: '23',
      HTML5_CREATIVE_IMPRESSION: '25'
    },
    exitEvents: [
      {
        name: 'Product1terms',
        reportingId: '1102847',
        url: 'https://sync.americanexpress.com/twitter/productterms/P29102376867640E0A690F7CBAB0D0B37?extlink=Centro_Filmstrip_AmexGiftCardTerms_Exit',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product1tweet',
        reportingId: '1102854',
        url: 'https://twitter.com/share?text=I%20want%20to%20%23BuyAmexGiftCard25&url=',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product2terms',
        reportingId: '1102843',
        url: 'https://sync.americanexpress.com/twitter/productterms/P35BDC57A703743708758C830A39FC5FE?extlink=Centro_Filmstrip_AmazonKindleTerms_Exit',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product2tweet',
        reportingId: '1102844',
        url: 'https://twitter.com/share?text=I%20want%20to%20%23BuyKindleFireHD&url=',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product3terms',
        reportingId: '1102851',
        url: 'https://sync.americanexpress.com/twitter/productterms/PB9061ABCC4914FF08604F4916ED2F032?extlink=Centro_Filmstrip_XBOXBundleTerms_Exit',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product3tweet',
        reportingId: '1102858',
        url: 'https://twitter.com/share?text=I%20want%20to%20%23BuyXbox360Bundle&url=',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product4terms',
        reportingId: '1102842',
        url: 'https://sync.americanexpress.com/twitter/productterms/P5F1EA1CDD0F14FAC91BF0B8BF6EE6CB1?extlink=Centro_Filmstrip_XBOXControllerTerms_Exit',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product4tweet',
        reportingId: '1102846',
        url: 'https://twitter.com/share?text=I%20want%20to%20%23BuyXboxController&url=',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product5terms',
        reportingId: '1102841',
        url: 'https://sync.americanexpress.com/twitter/productterms/P7AB7F7385B2B49339F634DBFC30BD575?extlink=Centro_Filmstrip_SonyCamTerms_Exit',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product5tweet',
        reportingId: '1102852',
        url: 'https://twitter.com/share?text=I%20want%20to%20%23BuyActionCamPack&url=',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product6terms',
        reportingId: '1102855',
        url: 'https://sync.americanexpress.com/twitter/productterms/P663C7F2473384B6F96BE1B25CE06A324?extlink=Centro_Filmstrip_DKBraceletTerms_Exit',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Product6tweet',
        reportingId: '1102849',
        url: 'https://twitter.com/share?text=I%20want%20to%20%23BuyUrbanZenBracelet&url=',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'bottomctalearnmore',
        reportingId: '1102857',
        url: 'https://sync.americanexpress.com/twitter/Index?extlink=Centro_Filmstrip_LearnMore_Exit',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'mainctalearnmore',
        reportingId: '1102845',
        url: 'https://sync.americanexpress.com/twitter/Index?extlink=Centro_Filmstrip_LearnMore_Exit',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
      {
        name: 'Video1_served',
        reportingId: '1102840',
        videoData: null
      },
      {
        name: 'Video2_served',
        reportingId: '1102850',
        videoData: null
      },
      {
        name: 'Video3_served',
        reportingId: '1102839',
        videoData: null
      },
      {
        name: 'Video4_served',
        reportingId: '1102848',
        videoData: null
      },
      {
        name: 'Video5_served',
        reportingId: '1102856',
        videoData: null
      },
      {
        name: 'Video6_served',
        reportingId: '1102853',
        videoData: null
      },
      {
        name: 'YTVideo Autoplay Percent 0',
        reportingId: '346020',
        videoData: null
      },
      {
        name: 'YTVideo Autoplay Percent 100',
        reportingId: '346023',
        videoData: null
      },
      {
        name: 'YTVideo Autoplay Percent 25',
        reportingId: '346019',
        videoData: null
      },
      {
        name: 'YTVideo Autoplay Percent 50',
        reportingId: '346009',
        videoData: null
      },
      {
        name: 'YTVideo Autoplay Percent 75',
        reportingId: '346010',
        videoData: null
      },
      {
        name: 'YTVideo Click to Play',
        reportingId: '906638',
        videoData: null
      },
      {
        name: 'YTVideo Complete',
        reportingId: '702600',
        videoData: null
      },
      {
        name: 'YTVideo Fullscreen Entered',
        reportingId: '346022',
        videoData: null
      },
      {
        name: 'YTVideo Mute',
        reportingId: '346018',
        videoData: null
      },
      {
        name: 'YTVideo Pause',
        reportingId: '346025',
        videoData: null
      },
      {
        name: 'YTVideo Percent 0',
        reportingId: '346014',
        videoData: null
      },
      {
        name: 'YTVideo Percent 100',
        reportingId: '346011',
        videoData: null
      },
      {
        name: 'YTVideo Percent 25',
        reportingId: '346021',
        videoData: null
      },
      {
        name: 'YTVideo Percent 50',
        reportingId: '346015',
        videoData: null
      },
      {
        name: 'YTVideo Percent 75',
        reportingId: '346012',
        videoData: null
      },
      {
        name: 'YTVideo Quality Change',
        reportingId: '346024',
        videoData: null
      },
      {
        name: 'YTVideo Replay',
        reportingId: '346013',
        videoData: null
      },
      {
        name: 'YTVideo Unmute',
        reportingId: '346017',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: '1.swf',
        url: '/ads/richmedia/studio/5036141/23079178_1360883148092_1.swf',
        isVideo: false
      },
      {
        name: 'RisingStar_Backup_v3_30k.jpg',
        url: '/ads/richmedia/studio/5036141/23079178_1360708451783_RisingStar_Backup_v3_30k.jpg',
        isVideo: false
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
      {
        reportingIdentifier: 'YTP_Billing',
        startMuted: true,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: '',
        mediumBandwidthVideo: '',
        highBandwidthVideo: '',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      }
    ],
    primaryAssets: [
      {
        id: '23228371',
        artworkType: 'FLASH',
        displayType: 'BANNER',
        width: '300',
        height: '600',
        servingPath: '/ads/richmedia/studio/5036141/23079178_1360883151152_Parent.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'opaque',
          sdkVersion: '2.3.1'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        pageSettings:null,
        layoutsConfig: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '1360963054709';
  var adId = '0';
  var templateVersion = '200_18';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
