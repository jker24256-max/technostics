#include <Arduino.h>
#include "M5Cardputer.h"
#include "qrcode.h"
#include "ttg_logo.h"

namespace TTG {
constexpr uint16_t NAVY=0x0127, GOLD=0xFEA0, GOLD2=0xD68A, WHITE=0xFFFF, MUTED=0xB5B6, LINE=0x2A45, BLACK=0x0000;
const char* NAME="ABDUL MUHAYMIN NAWAZ"; const char* ROLE="FOUNDER & CTO"; const char* COMPANY="THE TECHNOSTIC GROUP";
const char* TAGLINE="Praemonitus, Praemunitus"; const char* WEBSITE="https://technosticsgroup.com"; const char* EMAIL="abdul@technosticsgroup.com";
const char* PHONE="+917439008165"; const char* LINKEDIN="https://www.linkedin.com/in/technostics-group";
const char* COMPANY_IG="https://instagram.com/the_technostic"; const char* FOUNDER_IG="https://instagram.com/jker24256";
enum Screen:uint8_t{BOOT,WELCOME,MENU,QR_WEB,QR_VCARD,CONTACT,WEBSITE,LINKEDIN,INSTAGRAM,ABOUT,TAGLINE,EXIT};
Screen screen=BOOT; uint32_t bootAt=0; bool needsRedraw=true;

void text(const char*s,int32_t x,int32_t y,uint16_t c=WHITE,uint8_t sz=1){M5Cardputer.Display.setTextColor(c);M5Cardputer.Display.setTextSize(sz);M5Cardputer.Display.drawString(s,x,y);}
void center(const char*s,int32_t y,uint16_t c=WHITE,uint8_t sz=1){M5Cardputer.Display.setTextColor(c);M5Cardputer.Display.setTextSize(sz);int32_t w=M5Cardputer.Display.textWidth(s);M5Cardputer.Display.drawString(s,(240-w)/2,y);}
void line(int x1,int y1,int x2,int y2,uint16_t c=LINE){M5Cardputer.Display.drawLine(x1,y1,x2,y2,c);}
void frame(int x=4,int y=4,int w=232,int h=127){M5Cardputer.Display.drawRoundRect(x,y,w,h,5,GOLD2);M5Cardputer.Display.drawRoundRect(x+3,y+3,w-6,h-6,4,LINE);}
void header(const char*t){M5Cardputer.Display.fillScreen(NAVY);frame();text("TTG",10,8,GOLD);text(t,34,8,WHITE);line(8,22,232,22,GOLD2);}
void footer(const char*h){line(8,119,232,119,LINE);text(h,10,122,MUTED);}
void techCorners(){line(7,30,25,30);line(7,30,7,48);line(215,30,233,30);line(233,30,233,48);line(7,105,25,105);line(7,105,7,87);line(215,105,233,105);line(233,105,233,87);}
void drawLogo(int x,int y,uint16_t color=GOLD){for(int yy=0;yy<32;yy++)for(int xx=0;xx<32;xx++){uint8_t b=pgm_read_byte(&TTG_LOGO_MASK[(yy*32+xx)>>3]);if(b&(1<<(7-(xx&7))))M5Cardputer.Display.drawPixel(x+xx,y+yy,color);}}
void accentPattern(){for(int i=0;i<5;i++){int x=10+i*18;line(x,27,x+10,27,GOLD2);line(x+10,27,x+15,32,GOLD2);line(225-i*18,105,215-i*18,105,GOLD2);}}
void qr(const char*payload,const char*title,const char*caption){
  header(title);techCorners();QRCode code;uint8_t data[qrcode_getBufferSize(9)];
  if(qrcode_initText(&code,data,9,ECC_LOW,payload)!=0){center("QR ERROR",55,GOLD,2);footer("X  Back");return;}
  const int m=2,q=4,size=(code.size+q*2)*m,x=(240-size)/2,y=27;M5Cardputer.Display.fillRect(x,y,size,size,WHITE);
  for(uint8_t yy=0;yy<code.size;yy++)for(uint8_t xx=0;xx<code.size;xx++)if(qrcode_getModule(&code,xx,yy))M5Cardputer.Display.fillRect(x+(xx+q)*m,y+(yy+q)*m,m,m,BLACK);
  center(caption,108,GOLD);footer("X  Back");
}
String vcard(){return String("BEGIN:VCARD\nVERSION:3.0\nFN:")+NAME+"\nORG:"+COMPANY+"\nTITLE:"+ROLE+"\nTEL:"+PHONE+"\nEMAIL:"+EMAIL+"\nURL:"+WEBSITE+"\nEND:VCARD";}
void drawBoot(){M5Cardputer.Display.fillScreen(NAVY);techCorners();accentPattern();drawLogo(104,12);center(COMPANY,77,GOLD);center(TAGLINE,92,MUTED);M5Cardputer.Display.drawRoundRect(48,111,144,5,2,LINE);int p=min(144,(int)((millis()-bootAt)/7));M5Cardputer.Display.fillRoundRect(48,111,p,5,2,GOLD);center("INITIALIZING...",119,MUTED);}
void drawWelcome(){M5Cardputer.Display.fillScreen(NAVY);techCorners();accentPattern();drawLogo(104,10);center(COMPANY,77,GOLD);center(NAME,91);center(ROLE,103,MUTED);center("[ ENTER ]",119,GOLD);}
void drawMenu(){header("DIGITAL BUSINESS CARD");techCorners();const char*items[]={"QR CODE  / WEBSITE","vCARD  / SAVE CONTACT","CONTACT DETAILS","WEBSITE","LINKEDIN","INSTAGRAM","ABOUT"};const char keys[]={'Q','V','C','W','L','I','A'};for(int i=0;i<7;i++){int y=29+i*12;M5Cardputer.Display.drawRoundRect(12,y,216,10,2,i==0?GOLD2:LINE);text(String(keys[i]).c_str(),17,y+1,GOLD);text(items[i],30,y+1);}text("W/S Navigate",12,113,MUTED);text("ENTER Select",142,113,MUTED);footer("X  Back / Home");}
void drawContact(){header("CONTACT DETAILS");techCorners();text(NAME,14,33,GOLD);text(ROLE,14,45,MUTED);text(COMPANY,14,57,WHITE);line(14,69,226,69);text("MAIL",15,76,GOLD2);text(EMAIL,55,76);text("CALL",15,89,GOLD2);text("+91 74390 08165",55,89);text("WEB",15,102,GOLD2);text("technosticsgroup.com",55,102);footer("V  vCard   X  Back");}
void drawWebsite(){header("WEBSITE");techCorners();accentPattern();center(COMPANY,40,GOLD);center("technosticsgroup.com",57);M5Cardputer.Display.drawRoundRect(65,72,110,25,4,GOLD2);center("[ Q ]  SCAN QR CODE",80,GOLD);center("CONNECT • COLLABORATE • BUILD • SECURE",108,MUTED);footer("Q  QR   X  Back");}
void drawLinkedIn(){header("LINKEDIN");techCorners();center(COMPANY,40,GOLD);center("LINKEDIN",57,WHITE,2);center("linkedin.com/in/technostics-group",78,MUTED);center("[ Q ]  SCAN PROFILE",101,GOLD);footer("Q  QR   X  Back");}
void drawInstagram(){header("INSTAGRAM");techCorners();text("COMPANY",16,34,GOLD);text("@the_technostic",16,50);text("FOUNDER",16,69,GOLD);text("@jker24256",16,85);line(16,95,224,95);center("[ Q ]  SHOW COMPANY QR",104,GOLD);footer("Q  QR   X  Back");}
void drawAbout(){header("ABOUT");techCorners();drawLogo(16,40);text(COMPANY,86,38,GOLD);text("TECHNOLOGY • CYBERSECURITY",86,53);text("INNOVATION • SECURE DIGITAL",86,67);text("INFRASTRUCTURE",86,81);text("FOUNDED & LED BY",86,95,MUTED);text(NAME,86,106);}
void drawTagline(){M5Cardputer.Display.fillScreen(NAVY);frame();techCorners();drawLogo(104,16);center(TAGLINE,88,GOLD);center("FOREWARNED • FOREARMED",104,MUTED);footer("X  Back");}
void drawExit(){M5Cardputer.Display.fillScreen(NAVY);frame();techCorners();drawLogo(104,16);center("THANK YOU",88,GOLD,2);center(TAGLINE,104,MUTED);footer("ENTER  Restart");}
void render(){switch(screen){case BOOT:drawBoot();break;case WELCOME:drawWelcome();break;case MENU:drawMenu();break;case QR_WEB:qr(WEBSITE,"WEBSITE QR","technosticsgroup.com");break;case QR_VCARD:{String v=vcard();qr(v.c_str(),"vCARD","SCAN TO SAVE CONTACT");}break;case CONTACT:drawContact();break;case WEBSITE:drawWebsite();break;case LINKEDIN:drawLinkedIn();break;case INSTAGRAM:drawInstagram();break;case ABOUT:drawAbout();break;case TAGLINE:drawTagline();break;case EXIT:drawExit();break;}needsRedraw=false;}
void home(){screen=WELCOME;needsRedraw=true;}
void handleKey(char k,bool enter){
  if(screen==BOOT)return;
  if(screen==WELCOME&&enter){screen=MENU;needsRedraw=true;return;}
  if(screen==EXIT&&enter){home();return;}
  if(k=='x'||k=='X'){if(screen==MENU||screen==WELCOME)home();else{screen=MENU;needsRedraw=true;}return;}
  if(screen==MENU){switch(toupper((unsigned char)k)){case'Q':screen=QR_WEB;break;case'V':screen=QR_VCARD;break;case'C':screen=CONTACT;break;case'W':screen=WEBSITE;break;case'L':screen=LINKEDIN;break;case'I':screen=INSTAGRAM;break;case'A':screen=ABOUT;break;default:return;}needsRedraw=true;return;}
  if((screen==WEBSITE||screen==LINKEDIN||screen==INSTAGRAM)&&(k=='q'||k=='Q')){screen=QR_WEB;needsRedraw=true;return;}
  if(screen==CONTACT&&(k=='v'||k=='V')){screen=QR_VCARD;needsRedraw=true;}
}
}
void setup(){auto cfg=M5.config();M5Cardputer.begin(cfg,true);M5Cardputer.Display.setRotation(1);M5Cardputer.Display.setTextFont(&fonts::Font2);M5Cardputer.Display.setTextDatum(top_left);TTG::bootAt=millis();TTG::needsRedraw=true;}
void loop(){M5Cardputer.update();if(TTG::screen==TTG::BOOT&&millis()-TTG::bootAt>1800){TTG::screen=TTG::WELCOME;TTG::needsRedraw=true;}if(TTG::needsRedraw)TTG::render();if(M5Cardputer.Keyboard.isChange()&&M5Cardputer.Keyboard.isPressed()){auto st=M5Cardputer.Keyboard.keysState();if(st.enter)TTG::handleKey(0,true);for(auto c:st.word)TTG::handleKey(c,false);}delay(8);}
