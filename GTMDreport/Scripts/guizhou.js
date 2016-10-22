(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('贵州', {"type":"FeatureCollection","features":[{"id":"520100","geometry":{"type":"Polygon","coordinates":["@@J_EmW_icOkIG]GGEAMdWJ@RABBTCCOFGVG\\Q@SCQ@QCQEIYI]GY@YG[KMKCIFMR_AQak@mO}B]rBLOAODEJCXCNEN@FAHGHcFMBENI@AFcDCBCBMDELqFMHKFOBOFO@OAeOGCEAMBCBSACCAAQBIEIGECCCAQHCLCD[FYJO@WKqZy@[BQIWAGGaM]@U_OOGCAGAAEAEBCGA@K@OAKIMQCBMDWOKHMA[YCQLCLDHIACCBAEI@@GCAEDCDABAADOFMBBBCDFDY@EEEGAWCIECIAUBGAG@IFBFDDABDL@ECCEOCR@FKAAEAMHACGBAAM@ACIA[OC@GNI@G@OGEMEBE@CACBCA@EICCBCCCB@CA@ACFBBCF@BCD@@CB@BCRBN@PCNEHKBK@GGIKG[EIEOMOAgAWMH@BACEEBE@IQDIFKBAB@ACCADAXBACICDEEAACGCAADCFA@CECBEDACKGIMAKEaWCKAGDIFEPKRGFGBECGGCQAEC@ILQAEIA]BQAIEoAMFG`UPAJBJHJHZJPBTAHCBCCGSWAKFIBGCIOOIEIAOKcQCIHGVCV@\\CTCXEJHFJDDPAVBFEDD@GD@@MOICE@AJ@BMB@LAHCBCCE@CHKGAMEGCCCOSGUBGBGNE`GJIBICKIESCGEAI@IQQUEWAQLIPGPMPYVENFXAJCDBLE@EBCD@BFFDHDD@DMAO@AGCAMCY@IHCP@PGLKDQIKIGCMFIHMHaHMCcWKIKGEABFMBEDE@CGEAEBBG@GBGDQDKKQE@IDIICAFKEBCDAHMBECMCEOAAEHKCGHEBE@GCAN@BC@SAUEGBGCCCAACBBJE@G@QICC@EEACDCDIAE@ABBFF@LF@HLJAJAD@DEDIGKAABFLALIBGDIAABADDDAD@PL@FBDDDNBDB@FABB@DCDBBBADD@GDNFBD@BB@ABFFBJNBBCHBDCD@BJBDAPGDBJF@FHAHHHJBNJFBDCJDDKBJNEDAF@DFDFBDJBHABGHIFG@ABWEEBCAG@EFGCSHQEK@CBCHEFQF@BDFK@EBALBB@HE@AHEDBHABC@CBGJAFIDBGM@BDC@AFD@AFGLBHAFJFENGHGDI@SMIGUMWCO@[HS@OFEDY@IBSBCL@BBBDDDAJDH@FD@PP@BBBDGRADGFG@I@DDABEACACBMAELJ\\BN@JKXGJMDQDIDUTIFE@cI_KUKKA[BMBIFMJCFODAB@BHREHGD@DBDDBJBEJBRABC@YREJCLEHYXETILaTAPPPHPLBNSxBhNtBZMV_PqfLzR\\TNfFVNfL\\^XPV@ViNMXKL@VLlN@pWPANFPNHN@nDLJJNxXdVNvRpdCJ]N[hERBZW|B~ZvNJ^HJHNtJFdFPDPNfTDFvZnbPp\\xz@vV`IP@HBXWRkBUASHGHCTCBA@CEAICGECEAKEGACBCJGH@LFDDDFJFBFAJDLAHADHBDFDDNCBHLNBDFJDBJ@DB@BCD@DFNHJIJBNAFBJ@JLDRLJ@LHjC@CbYPg^a\\QL@LJNV^ZN^pNXLZDpKpYn_VAªxjPbB"],"encodeOffsets":[[109774,28013]]},"properties":{"cp":[106.713478,26.578343],"name":"贵阳市","childNum":1}},{"id":"520200","geometry":{"type":"MultiPolygon","coordinates":[["@@LCFM@]HGNBRDNHTRNFLEHQJ{@M@IaeECEGCUCC]cOUKGUCWB}LEDEHAHDFTVDJALENGT@HLRTR\\THJN","@@F@JBDDJAPG`GYXEXATF@FGLENLJJ@NDHLBRAnEXAVNNRJPLNFTNTJLLBLBVATBVDPTDJFDPCJIJ@HJJBbGVEt@hJNLNbZNJLPJdLLRJJJHLBPHJRJNBTGPUH]LMdYVMTALFTVVnVd\\`PJhLTJTFV@DGHo@UCSCIkeGKDSLSPIvGTEPGVY@KMIMECILGzMNMFK@QUYGO@QB[FMRUFO@QAOIECC@CDGPEFALMFUJGZJDEAECCCIDELEFIPqDCHBXTTHPBN@NIHIbKDSIY@QTULAHEDAPAVGLGL@ZEJ@HDDHNHDHBBHBPA^KDENKFKVEJ@ND@AGM@EOEAENSBGFGBMF@FDDNBDJ@B@DEFMFGFCTAHCPCfBTCVSFMJARC^AZ@fBNCJMDOAORgH[JML]gKcYMOCOAKEIBOCS[SCGBeBIPOXMHKLSNI@AF@HDFFFLFDNAACFACOAEBAHBHAFBHJTHH@LIFCTDRLH@DCCE@GDCHCDKD@DChEJ@LAP@LB^@fObWROHBLNFCDGBM@A@EDCGGACO@A@AFABKDK@KAIGKEBIAECEOAAEHIBGACECSDMFIDI@MEEBCDMRADEJMDCBCCEINeCMM]Gq@MCOGQEGSHOROFQ@UEUKSQckGGMGOE_CSEmK]AQBU@WEYCUB]J}I{IkHUAKEIEEGEMCEDGHCAEACEAMBCDKHKPADALGHCPEBDPELGDBHGRADMHANKHGDEH@JJ\\@LEPAHIHIRIJ@B@LH\\DTGRBBHALJ@L@J]BO@MAGEEKIKMK@CCAGFCHEBGHAB[@GBE@YKI@ODM@E@EDADCHUHg_[O]_IYFOP]DMIKYYKGWEEGCIEEE@MSCKBIEqKQSsGuKOFMHIRGJIAKKOJQ@eCY[CSOEGSKSBYUE]WaAsEKLgJ[ZeXYHSBWQ}IQQMaSKMEIBM\\]LUEeBKPO^@XMEQDqWcAMOYigYcQyAWLgDANAHKN@FAF@PIAKACQEGKGCGBIPMLIDKES_YMSAYE_AyF[AcEI@QCUIMAIJ@NFPCNIPg^IEI]CCGBECKLGDGBIAIBMAEHYNADCFEFEB@BDB@DCDMHKDABAHCBOBMQKBKLKBEFAFBHFFDJBtCP@RBHJJDH@XJdEXHRABMJEAACCC@C@CFCBC@CA@EFG@CFEF@AACKB@DEFC@ACCAAB@CEAACAACGCCEGGCG@KKIEIGW@WBC@E@CDEAACAG@OCMGDC@@IEAE@KHBR@HILIDCFZJJ`CTDNGPDN@HURBHHJBDMRCDO@WJEFQDAAGIEEKCIECGEAABBBFJAJDHADOLE@GAKBYCGDCH@DFHCL[XINBBFAFBLLADABE@QHEZBDLF@BAHFN@FAHBHFHBLFLC\\@HDHCJ@BBDJH@FER@HFNBBB@DCFCLIVKD@AKBAPIJGJBFBTVDFL`N@DJHjAXJCHBJ^JHNFFF@HGPEJAHL`ZX@BGJAPCBBRCDEDEAKIC@CDANEP@HDHHFHDJ@HHJFDH@LLDBHCFEB@D@NDHFFBFRZHFDH@BAHBNFDBNHHGLG^JBDFBRFL@JELKPCFKDAJHRPDDCBELCFEVGFEN@HDDFBBAFBDHDLDFDPZAJDH@NALGHGLAXBPAFBL@LDHPLHNBLLRBJCLDHFFLBBJFJABGDCNEN@DATJHTdXNDHJHJHBD@JBDDHJJFLPH\\DPLX@^DJFLBBD@JAF@JADBJPNDBDBLCFBHHBDALBDEBSPCD@HIL@HJLCJENBD@LAFBHOFE@IDGAGBEFELGHATBDDDFTDDEJGHCHSP@HEDELC@KFEJIFE@EF]FKCCBERBJFB"]],"encodeOffsets":[[[107151,27509],[107082,27178]]]},"properties":{"cp":[104.846743,26.584643],"name":"六盘水市","childNum":2}},{"id":"520300","geometry":{"type":"MultiPolygon","coordinates":[["@@EACDJB@A@@","@@ADMBABCJBFJDBBHBHA@GBALAFGHC@IMCCAM@AF","@@HEBCJ@H@CU@UAGBEGKAKGEEOPGTGHGJEHAD@@GPCNBLAFABEBRH`FDJ@HDFH@LDFKNBBHBZCJ@HBNNNTHRJFP@VC@RDDAJBLFJAHBJHDFHBBJ@FFFD@BFFD@DHFD@DFPNBHDDDDJDDGFEDIDGAIBGIGBUFaBO@Q@MHGLGNSVSDGBGCM@GDERONEPGFGFOE{EQGc@MDGPQVIPGLMBEHGF@@OBAPODG@EJEFMD@FDBANVLJBABCBI@EAEDMAOFG@SCGSQEIGOSCCCAIB_A]IQCIAOGMMKYMMA[QIIEGLOBCMOOKgME@KLC@CMMC[KIEKOSKGG@GBINQJOSQCEDGFE^MTUDG@I@KCE]QEGCI@KXc@IGYGMGGBENCPIJKAKCKGKUm[mGAGBGFMRENG@EAC@CDBJFHFDXFDD@BCBI@INIHCDARCBQFG@IAGGA@ALDDVDT@B@F@HFBDBHCH@BGAKEKAI@GDIHI@OOCODQKQEGDCTUVA`QDG@IEIAIEAE@e`GBICOEgHOBKCMDCCFOJIKEWF{@OWIgB}Fi@KGUAM@GFKBOCwCaCEGFC@CC@OGBUUKEC@IDAAAEC@GGGBELKBA@@CFC@ECY@SDGCCAOAECQAWAACDAGEGCOISDKAECGCAEKHAHFJQB@ZHH@HEBCCYBIBAF@RHNABABGEG@AHI@GFCHBBFVJFBJCBJHFAHHFAFDD@FD@BIJBBDBLDBDADEFQ`gLIHOJIRIJO@AIKYkGU@YCYBGBGVeDIOBUCMMAOKSGCAUDaAMNURMRaNOLIPIPELKDQEM[]GO@WD[FSJSFQCOacIOEQUcAI@_@KDGBK@ABGA_AACKQYQIg@ABWDABM@UKIMk§@CK@YIKBE@cSKOCQDKPKRGd@NKB[CSBUFSECCCUF_AKCACAEFG\\IDECQGGBE@CBEFCT@NEF@HBFA@ECOBKHEVGT@PDbBb^pFFCHCJIHKACEA@CTWJCFBPBBDAJEJKHGH^\\FBJFPFJ@JEBM@IGOGEMA@ABCV@@EAEEC@AJEZLLARQJETE@EDGFYPQLCRALCHKFK@MEMEKIGOIOCQACEMGCB_KS@C@CG@CNO@EcMUDIAOHI@CACCAICCEICCK@EGM@ODKAACAE@MJ_AGGGKAOAKBUR@BBH@DEBAD@BDHA@E@GAI@A@AEI@MCG@A@DH@JDDDDL@FBBDBHB@BDJ@FD@BEHC@EEC@ABAHCHABI@AACKEBw@UDYBSBENJJTDRHDJGFKBsAOHSJiD[FWHc@_HIF@LNLFRBJMDMCgQI@KDUPQAQKKFORQJUIGQIU@IDMLUjE@EA@E@EHOPW@OAEECGCM@GFIJAF@BKFCHGB@HF@BDCBGBGBAB@JKFG@CCIFACHI@CGBEDAHDJ@NIV@LLRRFFBBDBJCHBLLFRNJHJB@DFD@HE|E^MPO@cCOAMEEFKFOBK]OO@KCCQ@CB@TMVGBE@QEOBCB@H@X@TFDHDFFVLHH@RINGHGBEHIFOD@BFHBFUDU@CBABDHJN@PADK@YOMDoBMDQHIAYXKBEGDiCaMU_YHWSGKGoqQ_[DaAiO©wUBm`oZoLYCWKoMM]]YMUKIK@[R]bOhaZ@DiDKGI@QKKC@IAIBEAMJIGIEM@CDC@ACAI@CAEIACKMAGMDCCCEGABCBGCKBIAEIECECEKCG@IHADBDFHBLDFHFJDFB@DABSDGDIJDRAVQlWXUnQb@RbjRzCV_^DnGRIDs@GDajSngTWTOFM@WCiWSDIEEUQFYMJY@MMMS@wTQP[CGTGHkL»wEEAMGCULgEGFMXMJ@JKXANRb\\JHHDhG`ODSJCDGTKFCDU@CDOZMK@EDEGEAGA@ADICKEQOOIIOFQHKGIOEc\\KDQSDILGP[XKRMfE@OCEBG`GFDTADDJALC@@IACC@AFADADCBIAMDBJABmDCB@HCDQ@OEO@kMQFAF@FJ^ErGHFFCHBFEDBFAHBHAD@DFF@JVAPB^PbHPJDDEBCJBDHHVBJCDB@BJAdFD@NCPDNATGTCdQBANAHBFALGLCFCRHHJHB^EFJFBPBHANFNLRHFDNLXNTR^NJBBAJAXLRJ@DDJADG@KEG@SLEJ@DHH\\ZJPBHCRIDEAIFBDJDDF@DIFENABQBUACDEPBDNDDFAFBHC`B@JBFFNJHLBJGJGDGFCNDJWPMNCF@FCHEDQDOGO@QHIBMHIR@FDJHNJHHPBBJADBDF@VBJGNKFEF@HENCDIFYFGHAN@LABUDGBELBLCHQBEBGBSLILKBMHC@IHUJS@WJE@SGgAAAG@CC]QIGKGQCQEK@GKCAG@AABKFCBCJSAECAWBCD@JMJA@YGI@IFCACC@OKCGDIpCDMJ[HGBKADGCEBAECKBEBABDHABGEGEO@IEGCGKIGEBOFI@CBAH@HDJ@DSPIJENBDDB@BEDAFBHHNLpVTJZBLFL@BCDULC@AN@FG@EEE@CEMDKHGLM^KROlCDYBEAMD@FG@BDAD@DCB@FCB@LGFAFABGBSGEG@EBGACHCBEHCHAHEg@GACDkIECCGFC@EGGFGAIDIIGCA]JMJMCUFGDKVUTCJKDMAOPEECKCAC@ADCN@HBDJJP^DRBVLDOPEbMRBHHLBJCLBFEJ@FKJCBKEIFWFCBEJF\\DFHBBDKPG@@DJVDBFADB@FDDDJ@TFHCLEHHDD@HBBEFBDADBBCBDFBDBB@BDDADBF@B@D@@BDABBD@HHAHDHHBLAHAD@ERAJBLBHRNBB@DAH@TBNFHF@XIFAHDFDR\\DDLF@JLDDBHCBIPO@K@K@@ZHRJFPFHHADCHAFGB@DFD@BGJCH@JFHCT@JCHHHDNBFAHEFGNFTDBCBGHCF@HLHJH@FAJBBF@FKHG@EJEBHDAXFD@NJJQDAPBJENDDPEJ@fTNCHDFFDJAFGN@LHFF@DJHDJDL@@DCDBHAFHHHJFDEHDHDZ@FDDFCPYPADET@FBFEB@HE@EDCDIJC@GNAHCGC@AHEK@CEBAFCL@JAIUDELEJHF@TEBEBAPABBCHBDLGPCHEDEAABAACDC@EDADCEKGCACFCZEDSFQHAHEXB@D@FMJBDFAFBHCFEHBFAJBBDFDFCBGFEDBDFB@DEDAFADBHIDECMBIFGXWBGAO@CFEJMHGJADGDAFHJABDF@JA@EBCJCFEJCBIDCFADBBAJIBEHIHFDBBGBAPCLGDBAHBBP@DAJ@@IBIHCBKFG@IFCBIXQNADG@GHCBEJAL@FEFGD@DHDDHCRDNEJDDDCVIJDHHA@BCF@BHFIFADAFDJCD@FFHDH@DGDABHJD@HEDDBBEHFBDBCHHB@BABCBCJCBHBNNJBJCNITCFBVKLDD@JINEAKBADAFBREBABIDELCL@B@FFH@FJPGFDBHAHILYRAFAFEHCJQPGH@B@DNVD@JIJEJADBHCFKFUDEBEHCL@BB@FAFDDB@FAHF@DUAIFEH@FIJEJGHALDLAHHDFB@DBFAD@FDDFJAJBH@DCDBLENFDVCHBDFBJFDHBCJGJEBADGFENDLAB@DEF@DCBFDABGBFD@BKAKDBDBBADEBJJABG@EJ@HA@BDADABAAGD@FEAEDEDEFWPCB@JMT@NEL@HPDFFBD@BE@ABBFADK@CDFHCD@D^RBDADKDDDJDLAFQRSHKBEHAFCFAPMJ@HCDBD@@CBABACA@EDA@IDAL@FABECCBENCLBD@ZWDIBMI]BUTWH@@AAE@AHCLAJSAGNJF@DADCDEHCRLF@DC@CAAIK@EHI@IDENIJCHBJLD@JGHSBACEMCOAWDE@ECAEDGTE@ILBBEDECKBK@AEGCCGCGBMHCBECI[@ELWDUDKA[CAUICC@CAECAQGAA@ICCCAMDQAEE@AIIAEBELCBAACECAGDGAG@GBCFALBPHP@B@DFAPKHAD@DFBLDF@FELEHKBAVJF@HCJFBCDA@@GEACBMHGN@LID@LDHHBLDDD@DKDCPGJ@LFD@NIDEAWIKBETADGHAHHDBHBNCD@FHBFDD\\F@FCJBPAPCLADMJABGRGNAHANFNBLVXNARJJ@HADBDFDBVDFH@FCHIFI@GFQP@DBH@HADAN@DDDDDJBRCDF@JBDHHHBNSAGFOLEJKFMJ@BBJNPBBB@HJNBFGFAB@DBHJBHAd@L@JDBFAFDNBXEB@FJLHTBJHN@HBFBDHABBDF@HKEIBM@KGKDIJCJ@FDDPBCJS\\IFMDAFABICCBCHANGT@DRXBBJEBDBRJHPAPBDA@ID@JBJHPVVRFDD@PIDBHHJFHHFDFAHKB@DGHIBCDMBCFEJCDAAMBEBAF@NDFBHHPABARDDBBDAHDD@HAHCD@DCB@DEBDDABCFBFAB@F@DFH@FBD@FDBDHAJEHBFETNFPAJBDDBFVAFD@JCRCHBJTBVCDECUBEBAZJP@UJEDFJBLDHLJH@FCFDLQH@GMMAEAEQBALCJBJHPBHDDDHZBBDBXACBA@IBEDCLBDJFBREH@PFJHBACIBCJNFDFBJUGAAATIFGSiCQ\\@PENBF@BAEA@IOAAGEICI@SFSFEFKEMFMVGbMD@JJBLCPJPHHPFPH^DVJ^BRFNLHLNFDB@HADQHEDAHFFJDLCD@ZLFADGF@LFNBFAFDFNLHAHCD@DFHVfDBD@BCJ@DHEHDJCD@HAFDHFFFRFFFDNDNTBDALCH]AE@MHQ\\ATCHILCDIBcCEBCDANGNBBPTDBH@@DAFBDFDVJDDBJATGRSEEBAH@ZMb@DFHFBRAJCFEFAPDJDF@BAJR@DDDBJFFBLHNAFCBEJE@IACDEBAJ@PHLADDFEJCBIJAH@RHHRBHDD@HCF@\\\\F@F@PITECKDE@C@EEGBAPEFEJHDAN@HD^RTTT@HADBPNLFHFDHBJFFHDP@HEBACENMAOBUBGHA@SBEDEFCD@@DD@@EIMDMDCNADAF@FJ@H@BC@ADLLF@FCHAHFP@LCHBHGbFBCDM@IBCMDB@HBHFHD@RBDBRhGD@DBFZJJHNPFBJIFEBCBIAEACBENCDALUPCFGPSPGHAF@FGK_EMCUUoAYCQ@GCQBCDAVATG"]],"encodeOffsets":[[[110507,27989],[110530,27803],[110398,29737]]]},"properties":{"cp":[106.937265,27.706626],"name":"遵义市","childNum":3}},{"id":"520400","geometry":{"type":"MultiPolygon","coordinates":[["@@FA@AHAB@@EECE@IA@FAB","@@ZWFGDKFIZQD@BAAQFIIACAAC@CHCFGGQ@ABAPCDENIJENA\\ALBVL`LdJF@JEVSJCRCNCHILW@IAMI[DGDCLBDADBFBBACCJ@LAFGHQCEO@@OECG@ICCBCCAA@ADKTAJAZ@FCPET@\\GP@XDVNJHTNJ@HCHGFMIEBEAGHKBEC@BED@ACN@AHJCBEHIDAD@BAAGFCBGF@@GAABKFAL@CE@AREFEDGDAL@RFTGHDFEH@DBFAXFBAH@NGFGEQEAEC@CBEFCIMLACCDIACIEAMOQGB@EIEEAMHCBIA@ADCACDGAAIMEAAE@BAAC@EAAMAB@FCCABAADC@CAAEBA@ACCMIEK@@OBCCCI@IDM@IDK@eD}LYFQJMDgCCEBqCQS]IKMEOAUBIHGNGHALIRCDcMAGECgDGA@OOGCKPCVDXAPIDIDCTKJIAAOAIECGC]BKEQCUEGAICCEDEGQEEE@CBCFAHAXBHABADILMDOEIWQIGOFKTMAGOMAEC@EOKCCE@CDAGIEFE@CDGO@GDAH@BBNFHBF@DBBDBA@AAGN@BB@JNDDDF@@AACGG@CFCHCBED@@HDDFBNALCDIBCJ@@ILIF@JDJA@CGGAEDGLAN@BACUIUEAU@GAEECO@IHOBE@AU@CAACASBCDAfIDC@GKKMSAIAIAGK@CCCmAAG@AA@AFE@COIAGYOGAACAQBGFGAEB@BMAECE@I@@J@BOL]FwAQEOOKSGKGCIFONGN@pNFNALALMBOCUFKBOPAZSfGhUrMZ@VH^jHDLBTG\\OfaTECYOUOkyyKKGOBQFUCW]uEKE@SBIECC@KPGDC@ACAOBAAAGBGCE@ADABBH@DCCGIGACBCDCPFFABABEHEHOACBE@EAEKGGMECE@OFEKHAAGKEICNCHFNBD@DA@ACGPBFEDAF@HGFW@EDGDABCGKSEE@ODOFGAEDS@mO[G]COHMPKRKPSPcP[HW@[EQGGACBAHGhGZM\\SV@JELGHCIGCIBCCEDEBS@ADDDBH@JEFEBCGCWMQOEUAEBCNCX@JFFJ@HB@FEHKJILGNEHEDGACEMAOBMJ_ZCHDFHDJ@JDF@HCDARN@DGBEHHNBLBBF@DD@DEHAJEHSNMFBHFDAHEBG@CAIQCAGGKBGEBCBACADIAA@EEAAICIMHA@CAE@IJQHOBEAO@MCKBAPGPDBBJBTGHIPEDAEDCBEAM@CGEEIACAIOMCIBGFEHEHBFHJAHCDEDGHG@ACGQQQE_UmYeYGOBKHQAK^WBEGEAIXUWKWLKCAMKAQKaVMB]R[LOFgRSHSDQFCjARwCXIPUHKLY|[VKVW|OR_PuHaLU@SWQKWAIBSTKVidITIJZUVENWTSBwl[`IjHELOJcIY@SHWN[Z_heLQNEPPp@NELC@GCGDCHDFFNFHJFLFVBlG|J~J^IVAZDXFV@RA^BnLTF`DPFNHHHdlTRVLVFR@PEPQTGFHHRDP@NHrN^DNMfFJDDDANCFIBCNQDCFANFJ@JCNERCFBDFAHGJBFPBDFBFAJLFJHLBL@NEBEB@LADBBDHHCD@F@BCRCHC@KMGAQPaXeP]@KAO@KBI@gFCDC@CLGDCD@HDFCDG@QKSCEDKJG@SGGIEAGBGAABBFDPEBBDMBECEKEEGCE@@BMJKTGLWNOPAJAfDH\\TDTAPFJBLDPNPdZhLJF\\JjXLHR^FPZT^JpTpLRNHITKVhlPTBJEJKPGRFVJJNHR\\HERFNDJHXVPLVHPFd^PDJCHGNEJBJDLJDFFATFF@FEBEDC@IAEEEBIG@BGAAJEFKFHBAAIC@@CDI@YCIWIEEFCF@BKNKDAD@JFXBVL^HlXnC®nPNLXDjL`BHN^^"]],"encodeOffsets":[[[108777,26658],[108699,27264]]]},"properties":{"cp":[105.932188,26.245544],"name":"安顺市","childNum":2}},{"id":"520600","geometry":{"type":"MultiPolygon","coordinates":[["@@@UP[EWBIAKMQACAGDON[AYAKBCD@HAJE^EJEDEDKBSG[AAKACAACEMIEGKMICMOGAYDYI[GQMQBEHCNAPFLGFE\\MVOLERCdIlUJCH@PFF@FAPKJAL@HDJBF@LEHAJDBDCF@F`JFLN@NLHAHEDAZBDDFVDBF@LETSBECKBCPDFADCHGDAJ@^PRCDEBEAODGAAa[UWAAEIF[BkFQDCACACkAMCKEBCGA@CFM@QBGHCCGGEAEDC@CJOLMDIEUFEHAHEBKBCDMDENE@CCQFGC[AAEAO@SACCOYASBSBCBCECACDGBYDEbALCHIFI@IDAB@N@VFHHHDD@DCHAZFRBPRDF@FAFCFGAUGCDANDRDJHJ@LFDHBDFD@DAH@JJJBFBFJ@JCDCDCDCVGFCFM@IHC@@DCD@JAFGDYLQJ@DHVHDTPTEF@LFLBLHPAJBPf\\S@GDSDGDETGJ@@ABCJE@KCACCBC^MTIFALUFBEGAEECEECGAIAAMU@ECGFETGRADC@AAIIMAEDO@IEUIECEAAGGEMBCLEDEAEIMOEQEMIMQGAECACAK@CBCDM@IFGLCBCBqBAD@F@FDJAHEDGDQCM@ODGBABAFBN^BNFFHDfNJZDHDBP@NFFI@SDKNM@MFGTMJAH@TNfNRJHB^GRDF@RIDIACECAGAKDENEPCZGRKNCBBJEFEJODAHBT@JDFFJXBF@JEN@JT\\FHAHDBFADEFAJDFI@MDCHANEN@HCJKTMHAFBFVNBHBBHBLGVY\\@BBJ@FIPLRBHPBFBDBDHJHJDJJDJEJ@BHDLLHPJPLP@HETHJRLDFADEFULHDFFPd@HDFARBFDB@D@BIN@DBHBBD@REFVCJFDPAFHDJILDHABDBLBDDBHFFBD@PPDDHLBHFFBZEBEDAH@DFDB^JTJNJHBB@@KFGCAIBCACCCUGMBGAEHBBEEACECK@IAGFICEDQAEDC@OFGAGFECGFMDCDAJ@DE@ACABCR@FEAQCGAECCECCGGGAGIIBKDIBED@FAGEBGBCCILEJAFEDGJCHGBGCGCEBERGJ@RFXRHNJ@F@NGRCHCD@BAWaBED@F@DBJLDFH@FDF@\\GPBD@@IWA]UKC@AJCBEAAISECGCEAA@BGDCBC@EAEEEUUGMCK@GFaAUMG@EF[AGMMEI@KCKWUACAOBOAEMMCI@MCMCaAIBMD@J@JPZHDBHTDLFHHBREFGFANADERIDKLGBGCAACGG@CEGAGEGAEECcACAQKWOCEFWCE@EG@EEM@GIAI@CLOBQDCFICKDIBGEQ@CLMFIAGCM@EBKHGAIRDN@BAACOECAAGNMVSFG@CKUAG@GFG@EGGAEDCFAMEKMT@BAOOACLC@@ACBAN@HABGPOJCDA@ODEGIVCHE@ECEEGMG@GdFLAFDFGJCD@DFLDJ@HG@MFCJABAFMJAJGD@^I\\[ACUGECBEPcDSH[AOKYCKGEKYDGJSFIBCCEAE[DEGQSKAYJKAIAs]SMWSi]WS[QKIEIAUH[BcAGEGECKAOBKAIBWAGCOGMBCF@PEFABOBIDIFEHKPK@KAEEQS]WGEGIOAG@AD@FJT@LAHBBGDCD@HGAK@GCCCCGKKAGG@CE@G@KG@INECEIBCDEHAH@LFFLBHHDDFF@BEHEAKAAEEMEGMUGAAHIBGHC@AMQEOAEBEHG@CEKCCA@MHA@GI@GFUSAMGE@CFC@E@IIAKEASHCDGPE@GCCA@CFS@ENYAGBOACC@IGEOCGA@GDYHAA@EEAKEGIICKA@ECAGNEBIAEEDUEEOGKG@E@CCGIAS@IOOE[GUMBCACIACCAADCREBCLBBACGGCBGJMJEGIB]ACG@EEKDAEDA@ECCCAAACOEGMMMEGGBJAFCFMJQFMNKBIA@@AFLBBDBVADIFEFGFCREHSBIFYFSFEFAHBHFFLJRDNDRPFNFRBbDP^TBFDTHXBLI^GLSP@HGHDFBNFBTCJ@BDADMNHHJBLBHCLMDS@IDCJATHJNDNFHPFF@JGHAHAHDPNNFHDNBKP@JFF`R^FJBJ@JAH[`QLKBWCEBCPEJMASCS@QPAFFNNNPHHN@FEFcFGDMPKJKBGAKICGMSKIGAQBWLYDGDIAGCM@EBKBADFJAFEBK@UKHODEHABGHEACACIBIHGDE@KAKFEBC@IEK@K@IFIEM@CHABCACCDG@GBE@MEASBEBDNADAHIDIHuvIDK@I@ICUOKEG@_DI@IDcVQDMEKEOSKeEKCGKIICGBMLIDG@MDKEWYSmGKCWCIEEG@KBCFKBE@GMAMGEKBIFSPUBIBQJIBIAEAIGUYSMUGIEoYIG[YIKQMKEaFGAOGWAQ@MFWPaRIBM@OCMGIG]uImO_EESCKFUTKNEPEJGHGDcEUD_JGBcOWAGBI@gGiCEQCE@CSFIFQRKBKEOEGF@BFDBF@FU@AD@BNBHFHP@JANIFG@QEIEICWWAABAE@@BGBAA@AE@INIFCBEDoEa]aAOCS@UHGFALDP@FEBGAE@MFS@EDAF@DAFHHDRCF[JEHBFBDLD`BVEDDFDETAVDTA\\MLc@QHOLCLDRLPdTF@LAZJL@@Dl¨JNVLN@BAXCBAh@RJRZDLBBB`AH@BALCH@L@`BJVdFRJPbdDPERITETC\\@XHP\\^FNCRKLOFOJKJMPQbQNMVBNCbBVHDLTBPNNVDPACJUfAHAHDZ@ZHVZlJL@BIPQJIJGPKJ_hERCFCBCAAKACIAAJC@@ECCBEGEBGGEAIIDEAUIAEGAED@HGJ@BFHAHABMBQGE@ABAJDZADGFG@YGA@IRGEGBFLDBDHBFCLJTDPFHBHDCBBBXDRBFBPDDCH@TDZ@FGFBBB@LAFKHAHHD@BFBBJCD@LFVVHA@PDDD@HEDFDbDxAPEL@HBNHV@LEjA~JhPX|@XELFIJEPDDNCLDPAhGPFJDHAf_F@FBBJFJ@JCH_RUBSVCDFHLRCRDPPPJ@JGHCJ@LBLFHB@ADGAGACGEE@A@S@UCCCBKB@HHJBH@REDABQDCJGJMJ@DA@ACCWEECEGAIDCD@FBH@FMNQHEHAHB\\nVnHLDLBLILOJMDAFHHHNHZ@JWd@LDJFH^RDF@L@JCHSV]NEFCHDFTRIPMRAJ@HHHTLLPJF\\LNDDND@LKF@hNPLNPADKPFHJJ\\RNBZNNLHNBPDJJRB^A`BJDDTDHPFJTRDH@TEHBPCNBF@FAJADABKIMUABECC@ENIF@FCHOPAB@PE@GHAFKNOHUJORCH@NHdFRF|EPEHOHMFQPCF@HDNAHCHUTMTKHGH@N@RAPEbAVJHAHBJCHCJEFCHLCjIDENBFALGNCHCHEDEDQDCfDHF^PFBN@BFVFH@BCDILQD@H@H@HEJCLGBEEKGABOH@FCXBBBBFBDPJFDFR@^FLLN@HADAFDFDDN@RCTGLCHGBCQq@KHYJOFQ@CAG@QHMD[FOD[FOLCLALENKDGBI@W","@@RMFIBIACOAGAGDGJKN@DHB@DADF@FADB"]],"encodeOffsets":[[[110951,29612],[110510,27989]]]},"properties":{"cp":[109.191555,27.718346],"name":"铜仁市","childNum":2}},{"id":"522300","geometry":{"type":"MultiPolygon","coordinates":[["@@JJFDLJHDBIKIEAEGK@A@@B","@@FEBQEYDODENAJCPA\\BPKNSXcHMDgFQHSDaHKJIAKQSUMiSMKAEKAK@@CBCF@BKJKFADBBJDDFCH@DABCHEDEBITOFGBGHADABELIFMFCDC@KFMTIBIFCBKEOKOGM@EH@ACCGGCgGGCG@SG_CKEOGEICMEEECEBcGECG@KMa@gMEEYKM@EAW@WGICGIMGWB]HcCOKIAMD[PYDIGEKOKEEISGCI@EBIHIDQDCBM@OO@CDEFGTIFGJWPULKFKPIHMDG@MCEBIFEHMFUCKGE@EAEBKEcGGAIOE@GFK@CCGKMOeCCMAMFEDGBGEGK@AEQ@OEIECMEKACACKEIEC[MGBGAI@YMKCOKE@OMCEBOMcIIEIGGCMEEE@KDcXMFADBHCHCFGDGJaRAFOPANIRCZEF@LEBGBOCQA[BYCE@CBIJED_AEG@EIKMGSEKIKEYAI@I@SFy^EPIPGBKFWHQPGJKH[RwPWCEAYAkHOHEBILAFCPENQFEBKAQGIIOAqBUFIAKBOF]HEBGPAbAFELKLWJCBINBHSP@DBFCTCHKpGNGDEFOJUDIFG@MDK@CBCFSBQ@GBG@MGOAWKIMOCc@[B_HY@CBGLGL@FBLLJENQJOGG@KDAFDLCJEDKASBAD@FDLCDED_AcQMMEOUYG@EFKFO@ECEEAIEECKCAGBCACEMEQOs]C[COOMq_AEAGDIFE@GAQEUMQEIAINiBGAGaC
_kIK@cG_GYCUE[QSGQQGS@WCO]kGGgKWBGCGGKA[CYEMEMGKKCIAOCMEIKEQAMB[JSP@HJL@HKHNFID[f]`EVAFOF[DGBEFCFGHGFEBW@[DAL@DHJDJJFFH@HCF@JJR@DIF@BBNGJ@JHNCF@LLJ@FDFLDBFLJDJLDFFJNAH@BJFP\\RXRHJJTBHDHFLFDDH^HLLLFJ@H@DDBHHJFBDBNAJBFBBJBHHLBPH@BEHADBFFDFDH@FFFDHAD@NHALKNCP@LIPBLKLMLGLODEBKBGASBQEQAMBGDOAAB@BFDPBh@rJNHFHJDAH@LDHAJHHHJBTDLAFVTLFDHHDBXNPBHJFDHBFATKNGB@HHFHLDBJ@DBFJHFFBFALILERYHQPGX[PKPADIHJED@FNJADONGJALDHJJGLGVARBHDHPDRDBBUtCBQ@KMGEG@GFQ\\EDIBKHI@MABCBACEFC@CQAYFCDGHWJQFBRED@HAAGBCGGFMBQES@CA@KICE@IJE@YJCDBFVHDDCLIJBVANDJ@DCNEL@DJHDBFCDDJ^JFh]JODMEO@MJINBVJRDJ@dF\\BzE`BZFTBZNT`LFJCNKJOHAHDHLRFBDBLOJE@EBM@GLOBCHEXCJBXRzZdjhPZBNXdCrFRWN]@OPALFfKV[^ANFJLNbTRNJRR~AXGTWZYfI\\KhFLBtXbF^ZVTATLFHTP\\DDZ@fIRLPBLIJQHGJENLPHvTtLRFrAJBHPXF@FFDJFHXFLHZZJLCNO^EPJZ^`\\Ph`VGDGBCFCF@N@PCJ@ZLF@HA\\@BAHGFADGHEDB@DNLJLFLHFNBP@^A@I@KKIGBAAHQCSG[@K@AJIJQJGBGFO@KI[@IFGHCLGBMNGBCHQAGHCFKCOFADOHGBKNSLGFCLAFBBDBFDBHBBADI@MOoFORMfK`g\\YXMTGZ@dJPIFKGJi\\_xkTAXSFMVUYJIJSjcLUTSJAXBRLTXV@bKvG`OPQX{LU\\UZ{LKVGJODWxBQDiRETCTGhQPE\\K^QNAbURLLBBNLDXKXLWVBJHFAF]XBLGRALHPfZnZ`VRFRRDH@BGHCHCFGDIBEGGAGFEFAHDJPNBJBDFJHF@DBNAFCDBFFCJOHGASAICAHOBOLANDP@FBPARGJIF@DBB@NGDJBJFB@FBBCJDBABADHFLAHHDBJRDBH@FABGECAGNETMFGBIFG@CCCE@AAAKGMFGHA@CQMCBGDE@ICI@GCCEDG`YNIPANBDFHBFCFGHMJKLIFG@EGAI@EE@IDWDMFAVBPFNRDXDHFAFE@IAGCCBCT@FAFCDDJAHDDJHGFK@ITUN[HYHgBGDAHBRH\\FX@\\GdOTOLOLQNOPG^D\\HnPT@FCHBPEPCF@"]],"encodeOffsets":[[[107604,25514],[108973,25971]]]},"properties":{"cp":[104.897971,25.08812],"name":"黔西南布依族苗族自治州","childNum":2}},{"id":"520500","geometry":{"type":"MultiPolygon","coordinates":[["@@@IEE@CBCAGBGAEFCAEDGEEHGFqI]@EBERElNP@PFR@DC@GDAnCBAAINCJBDABCBCBED@BD@JD@BKCIBCCSHEH_FAPDF@NeLQ\\WHOJKTCRLCd[PFHJGLERJPPJRPLFJDBCB@BHHFCF@FNLPYDCV@DCLEHSDCTIPCH_CgGG[IQaBMLW@ININWHEhFVKHDBNFF¼xlKHGHS\\DROxST@NN@NIZZNREFVJFTCjXXDN@PEXShSTmbiHCt@JCHQCm`]DUQyai@QRaVmGAO@_JuUy@[woOmauYCEeSOMOCcEIEMsIG]GMIYuA}X{AYFQ\\g^MDIocuQUMWcMwIICK@mGMOMMEOBoXM@kUKK@WLMNUjU@WO[]eKUMeESMQ[Kyre`ONUAYMsAgTwAMOKGOOBObSJKT]]GMAK_CiKWOM­mmDkW]GUKWAIEC@CBMLALE@EDFFXJDJ@ZCJ@DD@BJABEGELIFBBAHH@AJFFBF@JCDAFEFE@SEEBCEKIICIAMFGHIDOCc]OEUGOKWUIGMCQEF[GGQIMUIQEOHILIFSAkOUgSLGJQMoKoS]IYSEOQ]KGiW[IIEK^ING\\QhBPCPINMDeAY@]BQDIBENUTSDeAODGDSBEDEHENCFA@I@ACCMECE@ANEHAHMTBFPF@FHN@BMCI@UFELMLCF]LOBGAAACGMGCGGCI@YFK@KHUHOBCBGFKBSV@RJZCTaLGJMJM@OASGWSGACDOrEJKFCFDJDDBFCFYIIHEVKNEBOFCH@DDDJFBP@REPQVENA\\@RHPVZ@RELMNyNKHDJNFNJ@LUZOHSFuHOJKTCTHLlfDJDT@VGpCHU@SESIgKOI[_UcUmSUKESBUNcZKNG^OVSHMAQIGIAOGKIIQIKKIcKOUQOIIGKMIM@gBGKHkRMHe\\BdGhATGRKFMESQMGQCMAGH@^ENKDFHJVFHLV@JCNQT@HELIFMBKCIIIGIAKBEPBNBPKTONQHMAMGaCBqHGBGLCLO^EDiBQPUTM@UCSD]PMJOAGEGMCYIGKAMDKHIJCNANBfBFTNHRBPKTWBEHL^GHQHKL@NPRBLGJKDEXNZ@LWFIHKd@NPjIL[NcCqG]IIBEDADC@MFILCBFHLFLNBBALDHD@HED@FGJEZDBHAHABCHKJDDDDVEFGDEFBBFRHFAHMJF@DEHDDD@BFFDBBGHCHIHDD@DEBABDF@BCLNH@B@HFB@FBBHDD@DDDLDDD@HAFBBLCLDBB@@KF@LHLFFTJNAJDLDDBFDB\\@DFHD@DADPX@BCB@BDBHE@ED@@NBFMHCFADBBJFLHHPEDBBNHH@L@PILDF@ZIJ@FCFCF@JDBCEI@CBGHCBCBIBAZAFCBEFELBLADCFEJ@HABEJEFBF@H@REFFPABC@AMK@GRC@CFAD@DDH@DDJACCMIAGHI@GHGHOHG@EAOTSJCHK@IACBEDADBBFN@NDV@NELILABC@CDGF@BG@@LDFANILD\\RPDJ@FDV@DADGD@\\FH@@HJFADABDDBFJ@DAFDJFHAHBJDF@LDVMHAHDHLRFD@LQNKAIHOF@DBHAFDJ@DBBTFBDJJHBFDDHFDNHCBCD@FDNABEBAJCFETALKLGAEECGM@EFKCOBGBAD@PAHGHADEJHFFRBHBFNJAF@DDLbFFTJNDHBFFDHJJVJHJFBFBP@BDLDFDFDLBJHJAAFDFVJPTXTP@HGD@DFEHBDBFXDHFJJVFRAHCLIFAF@TJL@HDHA@AT@NKLCFGF@H@JJF@DAJWLCH@FECU@KEIDEH@LJDPDHJHJFFLJHBJFDDLNLBHFLFLCFIF@FFJLJBDAHJRCHEBAF@H@LBFJHL@DDDTLFJP@JERGPDDDDCBG@CFCBQIG@CFADBDTH@HEDBDRLDD@DOHAD@FDFD@JMFLHHXHJDVRJLTJHFBD@LCNCFIFABRNBJ@FFFDHA`KRCL@THPJFHLJFBDFF@FHJNAPHFJHRHHDBLADDHBB@@ABABBDFFFJ@JDD@BABC@EBAJ@BB@BDJCF@BFBBBFAFFN@H@FBHDJADA@EBAB@FLH@BDBFBDR@JEDEFALBFHTD`CFCJET@HCHAJMJCTEBKNMAIB@BGDCBEFCJABEHCNBRDFAHAJBFCTCDABA@ACOBKHGBGPGHEDIAIDK@GLKPCLBFFDHFHDBDLJHJFNBNCNIN@DDFABCD@bHJHADAJDJ@JDHPHNB@BZDRFNDD@BCD@NFJADBTCHEF@F@FALABAdCHEPAJBFFTNAHDDNJ@LFDRHD@FCLAJFLFFFFBR@JBB@DEFWFGDABDZF^LHDHBdRV@NE","@@HUAaII@GJIDICOIESCCOAUBSAUAKKKSISMMEOKQIMMBUFWBmAQGKMCI@KIFMHK@ESEWBWF
Z_HOHIBCCIAE@DLHLHJCL@JI@A@CBBLAHKJADQJIACEE@ECGDGAIBQ@GBM@EAEFI@ICAEMIE@OLC@WVGN@JAFBFBJAHBBBJFFADDF@DFNAH@FABIBALEB@FULGFAFADFJCJEFGD@DAHIDCFE@ADBFAFCDIEGFC@EAACK@CC@EAEDKCEBMKKAEEC@GEAIMBGBECCBACIGCG@CCE@CAEOBEACEAEKEGGBACGBGAEBGAK@IEC@ACGAA@EAKB@B@RMNQFOBSA@A@OAGCAECE@KDCAEJGFMBEACBKGCGIDGAKHODEACBOJADEB@FABI@EEGBKAILGDGHE@K@EGOAYDOKISEIBCE@CEACGE@G@EMEAGECBCECACECAGEAACCCECIGABEC@GB@@CGIAGBEBKFGAEDEAEDI@O@CD@@AAC@AECEGABCACCICCCEAG@EJED_@YCK@GDGLCBIAICICKDKCSHODMCmEQGYDKACBA@E@CDI@KCG@CAIAA@CAEBAFABEHKBCBEJEFC@CBC@A@GCE@IACBEAAD@BBABBIDAA@LEF@HBDADFFABIBAFGJE@BFC@CDG@@DE@ADIBOFIHKFGH@BFB@FDDDHCHBFIFGPUPCFBJHRPVARBFEJDXAT@DBFHFFDBDBFALJT@DAJ@DCHAJIFMGOOEAIFIBAFIHKNAPBHIHAFBT@FEHCDGJEREDCZANFFBNBD@D@BFBH@DBNNBHCN@DHFJDZDFDNBDFNDN@F@HFDJDB@BCHKHGLAVGNDTXfBPEPkZBLAHKVERSVCFCNBHAFOPEHOLAFAHIJaDK@O@GEKQSMACBICEGAYQGBCAOKI@GCCBBFHBLLJ@BBCFEPBHAFCBGAKJKP@HCHGJ@DJBFFHXDDD@D@TMVERGF@JBHA@NGTCTIBOEQBIJOBBB@DDFBPHLHBDFFBHBHABDJDJ@FCHAXPHBJAP@LGHNDBLBDBDH@DI`BFD@JAD@HFNXBJHFDBFBDPBFLHBDDRBD^BDHDBDFHDJ@@HGFDBL@@DDJLJBDCP@DD@FGHCD@BFA^DDHBFAJ@D@FCHAXFFHJD@HAJBFJHVCFCFED@ALBH@XBDL@@NFD@JCFBRFDRCBB@JLJFBH@JDCLDr@TFHL@BRBFFHDDBHJJB\\J`F@HKNIF@J@FAAGBEfCJMJDH@HBFHFBBDHDFDDAHBFADKCEBM@AHC@G@CAIBECGDGEKHOFADEHELEHENCJENCJQJCHEPEFMDCTBLHZFDAHMXGFCBG@ECC@EAE@GLIBCHEBGDGHIJEFCLKHINIFAJKBALCD@BCFCJA^JrHDd\\MJKOi@MLcJGXE@KMYFWLCHIAKOQ@MLKRGHGK]FGXALSAOGQSMAEAeBMDMJILGNCLBJHDZHNHFPBNI^OTCVDN@VSROjAFCP]DKHKHArGAbDNHNBRGPMLSAOAMFOLAJBJHJJLDNAJEFK@GRSDM@IKUEGIUIQM
GI[SSQKQ@GHSFMBKCISUCEBGFGFCMN@JBLBFDt~DDDVFHFDbfAKf[NGlQLGBU"]],"encodeOffsets":[[[108549,28413],[107274,27387]]]},"properties":{"cp":[105.28501,27.301693],"name":"毕节市","childNum":2}},{"id":"522600","geometry":{"type":"MultiPolygon","coordinates":[["@@@B@DLBRGJEHCVBDFBD@FKHEFBDBBDCHCLCHBFDFH@HEHAJ@FF@ZQHCDCACQICKGEGCAEBC@EE@OM]ECECCC@CDAFBFFD@BCDOFMJ","@@JDATRJFHJF@HDLNDJCHWFCLET@FCDCAEEKBUFUAGKMOMCGAEBIT[N[FOBM@MAQ@AH@BABGACSEGEGBCZIFU@SÎHFBF@DABEAKGIC","@@IReFEN@NBFBDDBPAHAN@FHL@DDFJDDBJDDHDFAPGJBRCMCB@HGBGAAAICAC@ADIBANABC","@@HA`IVCdFHCHGFIFOLMLMJELELBHBFFFLJTJn^vJHNHPDN@JAbQXONER@XBPHHBbELFRNJL\\ZJHpZJFVHTNVZJHFBJBJARIJAVATOJELAHFBNHNF@LADELAH@FFDJDXHLTnXZLFNCH@JCNKHAJDLJDHFLLfPTLFNFRCdUJCJ@`CH@LFVPJDJ@L@JCvuJGJCBGBCCMFATAFB@NAF@HCHDDDBBADGN@JFJEL@L@JFD@FALELBF@HCJGJABDBDGFAHGBCFGPVLL@FABEEIBCLAFAN@HDJBHCZCXKRAHBLJNTDHLJHBLALINOHCdEFE@EGMOGMMEMBEROT@TDNBFIDOFAXDLARK\\_BG@IAIEIQ]E_IEO@LMAGCMEOMGCGBGBIHE@OEEGCMIMSGIBCD@JCTKNGDKAIAGGNMBCACEASFE@CEAICCHI@GTOHKHQBKAKGWCSAE]SCOAaEQEMQOMCQCKIEEAGBGFETEZEJETAFGDQHEFEJEBCAUACKABE@@JBLALMDANAPKFIAGBSEIKEA@IPEDEBMACCIS@CFGCCC@MDC@EAGGKCGCE@KDELG@IBACKKMEEE\\KBA@EBAF@JGLEBCHCLBCGFCL@HJHGDI@GECHEAEDEDEFCBEJBLEBCAGDAD@@DCNBAHMDHB@AKFMBQGCCC@EF@TFNLJLFFN@LFDED@DD@DGJNHDG@C@GCCCKDENDHBJ@BBBFJBCC@A@@TJBJENBH@DM@ABADCJBDFDDAJFF@VHJLj\\dNJFHF@DBFFDAFPNLBFKXCNDHJHPDMD@RPFBBBBDBBLBVCJHL@HHB@T@LAFAFGACACAGYISY@KCGIOAE@EF@DAJD^GB@HAHDCBAFJ@LFNEJBBEDCNADBDH@JNVBBFGNALHlnV\\XlHJTJHAJCFWHMHEJCP@VHPHfDN@VDABAPBDV@RFJ@TIJ@DBBJDDBEHCBCAGBANBDAAFBF@LDFJBB@AMDAXDD@DE@GNYBIFETMFAPDJRHHHDLBLA@G@IEKAIIGIC@CHMGAACACDEHDH@BEACI@CCAGDEJAH@JBN@BCAMACAAOBGCIDM@CABGZARGVMHJHDBBCDMFCD@FJNF@HBFADGDABAPBJAFABECAS@BERKAGCKBKNKBI@KHIXQBC@CEGFK@EGGMBEC@EDKCEAE@ADBLERJDADGF]DGDQCCGCUAECCAAE@KEEEAQDADEBEAcQSOUAGKSIG@CBC@IEEIOC@KDQNMACMMACHAP@JD^}G@AC@AFCD@TFTÍe@MDOAKCSGQOKEKIEKAWACK@MFSDCFG@EAAGFGFMEGUGIGEIEAMCgNMDS@UCMEE@GDCFE@KEFQduNKNGRIPEPFRRHBDABEDK@OBEHIRGHGBEBMHIBKFCHEAQEEBGDEAIGKH@LDHCGGFAFCFGDIDQBSCGEEEEIAKEMACG@GJ[BECGkcAG@KDEFANBNCBE@CIIGCYAWKcWQOEIKkM_OYEUAOACCEECYEEGCEAKHYFMPYHAPFRMh@@GEGZMHO@GVBBAFBHJLFLHHB^AF@VNHD`FRCLFN@@DE@@DFDD@FBGHABDD`VFBFAV]ICGEIMIG@MEMBEEEEMIMKM@IPkJOLETEDE@GKAE@CCDCDOJGFK@IEGAELIDGBKJELHBC@BFAAAFCDBAHDHHMDMBCDCBCNEDCAYIGAEAGCK@CA@CBC@I@EAGDW@CAIEGBACDEAAGDSRCB@MBS@K@EEIJOBQHGLC`CDMDUIGCKAQCIIKKIkUMEEBEJE^EFGHKDKAOEKKSWUMESEIGAIBYGOY]EMIQGEIAIDI@IAIGBGEGAOBMDQAGAMACMIAC@EJGBGCCECCC@E@CLEJEFQAKBOAAOBc@GA@IFIECG@MIGAGBCDSEE@GFaDABCRMA]R_@SFABFNANBDEHBDABIDAHHJ@JDJ@JEFKHIJ_JC@GEIKBCHCVG@AEEAE@CLENA@AOWGEGAEBCFCAIEG@@MCCCKGEG@EFORGLAFDJTTBHCLBL@FIHGLMFUBMEGAG@GFC@CE@EFI@CAAC@OBCAIKCGBMAAQFIFMDQLI@KACBIFEAMCI@EGAIACEFECCBEDGBGGGCNSFGBCA@BEC@IFG@QUCCBIMEI@GDCAEGJG@CAASCI@ADBFEDKDC@EGIEK@GCOIAABMECECGFIACCAUDODICIFGNCREHBHDBDDBFBBCJ@FEBBFABCFAF@@DDFB@FD@BABBBABDBDABHDDHBHDLJJJDDBHDRFDZBDBEVDBFBPGJCLGBB@DDB@ILELBDDFHDRD@VACABCB@AAC@DAAAdKPKMQAEDODI@CUKEIIECK@EII@EAEKGAKCE@C@IBCOECCAIDCHAJECEBCF@HBAADKCEGA@CBEAC@GDEDiBEJIPAPGJMFCTEF@@AEEE@CA@GAECCUDWYOGABDBGDDBCBSOCAGEACECEBGHMDKNGBGHAHEDGEU@KCAP@FEDCFSHIJGBIAKEGBCDKKUKEAM@ECIAKBED@BDHBLABABOAMCIBEHAAGAECEBKA@CF@@AD@AECBWCI@EAE@GHCCAGAEGC@EGSCAILADEBGF@HADAB@DEAABAFGJCAKBABFFF\\BDHDJAHDGLFHGHBDQNOFBHF@BBCD@JEACHDDFCFB@DBDIF@BFBADGBWDCAAB@BFBADIFGASBICiCBAACQOE@CAGBCDUEGBAEAGAAEG@GACPC@ACCFE@CIABCAABGCCA@KBEDEBGAE@IIFIHABA@@EAC@GEFK@CFGGGEK@CNAJEROPEDCBGBUG@IDKHQNIKOHAAAIC@KDWMGI@GDCKIEAEGDKKAO@@@DKFBJEFICADAPBFK@CDKAAE@IDEFSXAACKGKCOGIAEBCAOHICIIAAAAIECCAAABGDEBIF@BCV@P@@MDEHAIG@APCCIFOACEE@CDAECECBIBEFEBEL@BCCEHWACGM@eECEBKFGTEAEDIJEJCACB@FED@DDD@JFF@DEF@DIJANEDOBEBIBGHABDDBDAJKLAHIBCJKH@H]NCBAFE@WGA@AJDJDHMJCRCFEFQFELCBG@IAKDE@CEGAiIICACGSC@EBMFCHIZBJEHAJAFEBCPKTGFIJCACCC@GHKHGBMLIDMPAH@HBDADGHGBGCE@IDEGUAECDGAGIHGAIIMBIFITG\\DF@DELHLBFADCFMDKPMFGF]CBH@FEF@DBDCD@BDFAFFLBFAFAFEHEBC@GEOGGGEE@CCCQ@IBOAMDEFGBCF@HHJ@HDD@DCFDF@BILGAEJK@EHFNCJFNIT@JAB@HBFBDABICAHGGICE@CDIAGAKK]GEEAEAAMAI@@BAHJXINBH@R@DHA@NKdDFHHJJ@JENYFIHGNAJDPNhNJRHDH`PMNIDG@BF@HLHDFJJPLJHBLFHJHPH@DEDBHEACDDHIDG`LADDNH^bBFCVBHDBTCF@RHH@JEBB@FRHBHDHRDDBEJCHBRADHF@FGFHHFABFCDKDHHRXTJDLAJEDSGEBEJ@JPV@HCHUBECIOCIIK_YIEG@IBGDCBCDADC`EL@HDDLBFD@LABIBMHCJGF@FABGCOBEAAGDI@CECG@IJE@IGGMCCAAWHcFKAYE_DIBKFOLMFQ@WUIBODMCIBECAIAECACDKFE@CCFIGI@GC@CFAF@ZABIEC@GDADBDHD@B[HED@FCBCJEFCACFCDAFDB@DA@AHGHGFUIQCQJILYZM@KECKAI@_CKEKGEKA]JIFUVILEJCVEPKHIBQJGFEHFHCJBFMG@JAHI@CDABA@ACBMQEAB@HCDBDHD@FBDFF@RrLZLRLZJ\\FZ@RIHSDyBIEEIaKOCS@WCQGUWSGK@IJC^CPGRUfQNOHODSLCReJSBOEOGKOIGGFEHEPBfIpCLIJMFKAUGoKeGGEKWMOMEUAM@UDQDSTOHkRG@IBKJMVURKAE@GBADEBJDBHEFJBPFAJABADCBGAAAFC@AIE@B@PBBFBLABBJ@\\NHFFJb^BNIJOFS@QDIJCP@RBB@JHDDHDBJADB@@EF@HJH@DA@GCABBDDAJDBAHELALGHBBD@BFABBCFD@DCDBLEBABEH@FIFBPADBJ@FBCD@DEFLBBDEDEAAFJDBHLHB@GKBAD@L@DDRMBBCDBJCNJBBGDABDAFBDAHH@JAFB@DEBLBADB@DBVCBDB@BALCBECEC@AEGGDK@UFCLAHFH@DJ@HBBABBLFBJ@DOFCPEL@FDDD@TBHFFHBX@HAFBLLAHFHBBL@N@ABGB@B@BFD@LFHHB@IDCBBFFCDBBN@DB@DFBJHBkJKHAL@JDAJDHDFGD@DDFFBAFD@TFRARGNKJUNUTMZCAZHP@D@@HH@BPBBHBAF@LIFAFIJIHGJGfELIH[RABBFAD@JCBC@CB@DBJDBCFAH@BDB@DA@@DC@BB@DCBDBABBBAFDJEFGF@JJLNLBNGD@HBDFBPRBJJ@FAD@FJADFPDDDBFAF@DDBHF@DFFFJF@DCDBBHBFFJAFD@LF@DDBFGJEB@B@BHBBNEBDDADABE@MACCA@CDS@@@ADIDBJIFDBJ@@FFCFACLCDMHAFA@CAA@EHIFC@ABMBEDADCBQBEDAGCEBEFIACBGCCEBEJEG@C@CE@AAEBCAC@ADMEE@A@GAIC@AAAQDGH@DCDHDHJBLFJAFIJBDIBJBADADGBQBID@LMNI@GRKNBD^bDLLPBD@JHJHFJARNXJJHFLBLELOVGTWfE^BLRdLNLHXGNAFF@FAJGJ@JPNJVbr@JALINQRKRIbDD@FLAGPOHAL@BE@OMAHA@MCEFDFHB@FDFJ@CBHbd@XG\\EjCTIPGtBLAHECIQGSCIIFMTAZAVCx@FADLBBJ@BADGBGBAD@FFD@FG@AECI@ACA@AGACEAK@CCCC@ICGB@H@NDJ@BFB@J@HBH@CG@ABCFA@CAG@AVQLAPBLBHHBHCRfEJQ~HDIN@DBND@JGDEHIBNHB`L@FMP@DDHD@T@`LDANHDFRBPDPJJHFLFN@NELGLKDQBKDOREZCH@JDFFRjDhHJ@HAXBVJHD"]],"encodeOffsets":[[[112158,27383],[112080,27507],[110499,27799],[110677,27987]]]},"properties":{"cp":[107.977488,26.583352],"name":"黔东南苗族侗族自治州","childNum":4}},{"id":"522700","geometry":{"type":"MultiPolygon","coordinates":[["@@BA@EKEAAG@CB@HHPDCF@FC","@@GaDAI@CE@EGACEFENDB@BGPNF@@ABKPGHOKB@ECCJaLQRQJMBK@IaqIUOM@IHIBI@EEEMBWHKGKMQcAKF]XeHSPUFKAKEKIGWIQMIBGEGI@IACKOCK]aACLMHQJ@NM@KJCRAHABCBCIAJAACJIBEEIAKGIGCDC@CHGRCBB@BJDHBB@F@NFBCD@DBFABBF@@D@DFHFIFADDAHBDEJAFDFBHFCRADABCFCNABAD@JEFGB@DBB@BENGDCDKEBED@EI@CAJEAIJCBC@@T@DCB@DDNBF@BABCCCFAAMGA@A@AFAHIAECCE@@KECIBEEGAAADC@CIEEECEE@AGCCE@EBCACCEOBCEIC@EBI@AIOQEAAC@GHCAMMKIK@IHEFECIBEAABACADA@CAAD@@CB@@CCA@ABGDECAAI@CDAD@DA@IBCAEBA\\QJGFKHeHIJGJIBEJE@KBEGAAAAOG@@GC@O@YGBYDSNMVIVMLQHQBSEC@BEEACE@CHCCECGBIICK@GBILAlIGEA@CCAM@AADCEEAACD@JGAEG@KEC@A@AHABAM@K@AAEGBGKKEAGBW@GAEEAG@SCCECK@OFEDCPI@EAAKBAAA@GCIG@GEKBED@VCLHHBFD@DFAFKDABA@ACUDCAA@BCKAFA@CEAIBG@BGACBEACCBAHIADMAIDCAAQNCCK@C@ABHLA@KGAGICBEFBFCACKAFE@CDCEAI@CAOBEAEJG@AFABKFCACDC@DEAAEB@AACGAKHKBGFABICCBACBAHDB@@CIG@GFE@@CAIBCACGGC@IAA@QDOJIRCT@PEJIAMa]EIGE[MI@AAKBEAAA@O@AJF@BEDBBHBDABCBABIOEIAFEAGICFABCHAF@LBVQNULIJAH@lQPGTSRCVCN@VBNFNPLXHFfHpLVHLBNEJIDKJoAeFOFGHEJHLPPHPFTAfIDQTKPCPGRMVeHQDOD]JIL@THVXRHXDT@PDbLFJJFzATCJG@QEYI[KYKQKYQqE@CEA@EGCACDC@GBARFANBDB@BADCJ@BG@INHAEDIEGFGHERIJALGFODUFIJKVUJE^ILBHFFLDL@`BJDLLFN@ZYJKRIRDVJHEHGBGB@@CCABEDCDEDBFEDIDA@EFC\\G@AGCACBCHCD@JFBA@YBEDED@@HHJEJDDF@LEDCDBBFBJFDJANDPCJAXVR@NEPKLEJA`CZFLBdEXGBBDDHNJHF@JIH@FD@DCJBHFBPAHDBA@EHEDINGJABA@KECKACC@GFKD_BCDCDAHCJAH@JF`ZJLDJJPFDVADG@GOU@IFIFATHFCBICKSIQWGGLCDCAEEBGGHE@EGEBCAQDGFICAQCCGAGQG@EAAIFG@QGE@MDG@CC@EDUAE]aMGCCKBH_JCCGDCFBAGFC@COGIGEGAKIGOKIICEKG@GAEH@JCNM_OCGQGMIQwBIHMJGZEFM@IIIGGCELc@MGBAGBMAGJMIWBIN@JBBBBFFF^HLLHBJBDCF@JDHHBGHDDACI@GBA@IJSEMDIEMFGL@FIHBJK@ACEDE@CCC@GGI@GDEHAFENCPBJAR@DD@DFFHHPHHFD@FAFGBEBEAEEKBECE@ADCAC@CFE@EAG^DHENELONCFIAEGI@CFI@CCEH[JSJENA@AACFCK]IMSQGKECKEUAYMGIGAAIEE@CACPIFEHADE@OEEKAIFE@OCC@AJBJIZCDGAGDA@ACA@EBE@SPEAGGKAWMKCEGC@@CHQDCBAHHDBTGHMNEAAECAC@ELEBCGSIBCKA@E@MFKEKDCBGBOCECHMLCDGCCBIDA@CG]MK@CQE@CDIJCLGFK@MCOKKIEEEEMBMFMLO@CEGIIAIAgWGKgAAIAA@AESKcMC@IDG@GDYD[CADE@ICgESDIKOGgQUCSEIEMMACKCCGIDOAEEGAE@EEE@CA@EACIBEEO@KDEEAGGOWKMCKEAEE@CDGJMDOJGAGEG@AIAAEAMCYFCB@FEBECKIC@A@ABCLHHBFH@@BHBFDRZDNERGNWNUXENAHBLJZBLAJGPIJK@KCEKYW_eGMKEEDEDAHDN@XCHEHQJMLILQ^GtBRT\\BFAFGDIBIAW@UIQcQ_AIBGICAAAGDEGEKLIDCA@CBGJKAAKAMNQDAACAEGWIIMG@MICC@CEEFC@CCAECIBEDCFCAEIDKAACBEA@E@GA@EAABADBNCDCBE@A@AQEAE@MFYAGDE@CHDDAFBBD@BBIPPfRdFRAPGRENKBI@OG]SSCKHGpSdUbAJBPDNDLVXBLGFQAQDQPORKFICIKECBAA@@AFA@@AAC@EE@CE@ECIDCHOJEAGBKACBIBE@GEEBCJGDAFBFABANGD@DJLF@HEHDJ@DD@D@NLDBDBDCBAPFDFFKDALABDDHFI@C@AJGBCDBDBDCJFBJB@DADK@EJGDA@KIE@ADABABABDJIJ@FADE@G@IJCHONWPOBeNKJCRFXFR@PGPEHQFQBKAKGGKQMCYOGQ@E@IIIDCCCAK@WCWCQ@iJMAYMQEDK@KEIDIDEEEPC@EDA@MIM_QWAEBQCGEOAGCCCDE@GEGIGAKEUGI@GAE@GCGC@ABIDABKBIGMAMKBGFEDK@KCODEJAFC@E@IFQ@G@CAI@ENSBIDCFAZ@NCBCDOESAGBMEQAODOHE@CEC@EFOBOCCECOCSKEEAIBATU@AACCAI@KCICGEIJeTMBYDWCQKKMEGCOCWBYAMGKOIG@I@UH_BGCYKOBMGoKM@G@SJMNKBOGQOK@UQGAK@KHUVIDSBKAcO[CKCECKMAGF_CKACMGAEACMAOGGEAEECICCBEECM@GIMECSC_BK@ICGEIAUIMQCIG@@FBDRZFPALEDAJSJEN@LCDEDENKJAFCBGBAHEHSPAJCFGFADCBG@EDCCAICAEBILALE@AD@DL@LBBFNLjTVNRTBLIJGLCbGTERChGNWdMTOL[AOBIDMBCFCPFZAREFRFHLADCBCHCZEJMDEFOADH@BCBC@MAGEMDJDLFBHGBFLPEF@FDHNLHBF@FAFBDGPGFAFABEBOECDADBDJHDHCDG@AACB@BDFAHBHBBPADB@BCDOH@LDDJFTAF@FL^vDXEVARHPLLzzPlPVDZSFeb[PSHKAGC]iUGY@qNgVeHYTOBAPELDVAPKNKBMBMEoM@MHEPDJLHTHPLFPBRExK^API@@@@JDFBFANA@BFEHAHBRBDHBZPBHPJ@DEF@BBBH@BBDnDDL@BHBJBJNTLL@F@BCDeJEFBTBDDBV@@BAFGP@JDPFFHBV@FBJVDP@FUBEBCHBFHH@DIBICE@KJ@JI@ADCJKDMBEACC@GC@AFGDED@DHHBD@BE@CCMC@IOABHAB@FA@GB@BE@CDDJLDFPD@BFNHPNBLSPEJHXRFJCPKNCJABGBWAGBEBAD@DFFRFFHFCDDBJFHDVFRALD^DHJFPBBBIJSLCDCJOJWBUCODDLPH@PHBhCFDBHdNDCJQBKHGHMJGVAPBNFJLT^DRArDFhDNCRIZE~KfCL@JCN@JCJ@DEJBHCJABKEKBALBDBDFD@DC@CBCBIKI@GKEE@AEBAF@JBDCDCFB@FDDRJH@F@AIDABBDDHDHAVFXBBC@KHDF@FAHGLDFGBBFPNDFDNABGHEB@ELDBHHBBDAJADBJPCLCRAH@HAHFAFBDHF@FCNAAEFBLHLJdXNDbGNGJGNEHDLJRJLCHK@ODOJGZ@NDDBBHP@NB@CCCCGEE@ADCFAF@AKDCBIEWFMZUNOHOJORKXBVFRR@JBJHFTDJFDLAJIJ_HMFAHAHHVPTDDHDNFHBGL@DDFADGDKBA@ANI@@BDFPJ@NC@@HCCEFUAOBCCEIIGWFSD[DU@UDGHDJdRPLJBJFPPDJAHEJBLTXDHADCBMDI@OAYIIGIGIAOB_VEHBNpJFRB^AJBBFKR@JFDRBHDDHAFEHQHOLEFCJBHDLbXLFNBHJDLCBAFFD@DEBCDBBHDBDFBCFJDBDWACBDBBDA@ABELCJJRF@FADFABG@XNhBPBPNJF\\FLHHJ@HALGLMFODM@QAADA@@DC@ADE@ADEABDB@@DDADDDAJD@FDBDADBF@FAFNPHH@J@HMD@\\PJBBDN@BBHABDNGFBBBELQ@PDDFFDK@ACCBECEA@JBHAHBVDJJFXDHBFF@FCZCEADAAENCPBBBADCFCDB@HJ@BFDABDGJKCKDDR\\ZNBLGXPNCDANRLJPBL@B@DHFAFBBBBHHDPPV`^@bNHHXBRJ\\Az@rYXLP@ZI\\EDCDKRGDBDDFDHLAJBRDBBLALADBNDFPHBf@PEPAPEPGLENKrCFANADCDEd@BMJAFENGdGHEBM@MFWDIDCFBPKPqAA^P~@nblBRQ`ENDJNL\\LZHZ@^HZJFJDR@RDR@T[RUHEHDPSDAA
BQI@cXBNHF^HJHPljdX`FnI`R`prLHTHGX`ZNVDbCjFHLAZWJBRGNCpANCZPL@BC@OIMCGBADAV@VCAEEG@APCJEFGHAHGJM@QGGUKEEGCEC@S@W@GDAPARFF@HANU@SDAR@DD@LPPL^PALEFENFPBdDP@NOF]F{@GEC@CIAIGQMKEAKDGAGAEMEIAKQ@KJU@MCIBGFCHA@DGJBDJEDDH@LE@IBAHAHADAACE@@GHADGLE@ABEJIHEN@NHBF@POXGP@F@FFBF@ViNKJCV@RJJHIVQREPLLRRBVOLCJ@hRNDNCAIEQMK@KJETE"]],"encodeOffsets":[[[108773,26653],[110251,27889]]]},"properties":{"cp":[107.517156,26.258219],"name":"黔南布依族苗族自治州","childNum":2}}],"UTF8Encoding":true});
}));