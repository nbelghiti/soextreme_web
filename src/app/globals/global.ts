//export const API = "http://54.36.190.213:3000/";
export const PORT = 8000;
export const API = 'http://soextreme.fr:'+PORT+'/';
export const NOW = new Date();
export const LANGUE = 'fr';
export const LANGUES  = ['fr', 'en'];
export const CURRENCY = {

	'euro':'€'
};
export const LOC_SOXTRM = {
	lat	 : 43.7613593,
	lon  : 6.378837200000021
};
export const RATING_ACT = 5;
export const RATING_PHOTO = 5;
export const GMAP_KEY = 'AIzaSyAgiDSdRngu3Lqnac4YU5xP3JVwEwwZ0N0';
export const I18N_VALUES = {
  'fr': {
    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc']
  }
};
export const ASSET_IMG_PATH = 'assets/img/';
export const ASSET_JS_PATH = 'assets/js/';
export const CURRENT_SESSION = JSON.parse(localStorage.getItem('currentSession'));
export const CURRENT_CLIENT = JSON.parse(localStorage.getItem('currentUser'));
export const CURRENT_GERANT = JSON.parse(localStorage.getItem('currentGerant'));
export const PLANNING_COLORS: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

export const ERROR_FORM =  {
	
	commentaire : {
			
		nologgedIn : {
			
			message:'Vous devez être connecter pour pouvoir commenter.'
		
		
		},
		invalid : {
			
			message:'Votre message est vide.'
		
		
		}	
		
	},
	reservation : {

		nologgedIn : {
			
			message:'Vous devez être connecter pour pouvoir réserver.'
		
		
		},
		horaires : {
			
			notSelected : {
				
				message:'Veuillez sélectionner un horaire pour réserver.'

			}
		}
		
	},
	login : {
		
		email : {
			
			invalid : {
				
				message:'L\'email renseigné n\'est pas valide.'
			}
	
			
		},
		mdp : {
			
			invalid : {
				
				message:'Le mot de passe renseigné n\'est pas valide.'
			}
			
		
		}
	},	
	
	register : {
		
		email : {
			
			invalid : {
				
				message:'L\'email renseigné n\'est pas valide.'
			},
			empty : {
				
				message:'L\'email renseigné est vide.'
				
			}
	
			
		},
		mdp : {
			
			invalid : {
				
				message:'Le mot de passe renseigné n\'est pas valide.'
			},
			empty : {
				
				message:'Le mot de passe renseigné est vide.'
				
			}
			
		
		}
	}
	
	
};