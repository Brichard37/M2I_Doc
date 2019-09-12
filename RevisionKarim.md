# Revision

## Spring
+ En combien d'instance sont chargé les Beans?
  > en 1 instance, ce sont des singletons

+ Comment accéder a une base de donnée avec Spring?
  > JPA (Top 1)
  >
  > Hibernate
  >
  > JDBC Template Mapper
  >
  > Build Datasource dans
  >
  > JDBC (moins interessant et a ne pas faire)

+ Qu'apporte le model MVC de spring?
  > La séparation des couches

+ Par quel moyen le controlleur acceuil les requetes clients?
  > Par du request param en Entrée et en retour par le Model ou Model and View

+ Comment charger un bean autrement que par le xml?
  > @Bean
  >
  > @Component => générique
  >
  > @Service => couche (plus utilisé pour les services)
  >
  > @Repository => Data (pour la manipulation de la données)

+ EL = Expression langage
  
+ Quel est la portée du scope?
> Dépend de ce que l'on défini session, view ect...

## JSF
+ Qu'es-ce que JSF?
> c'est un design pattern de type MVC (View JSF/xhtml/faces Model Bean)

+ Eager ou Lazy?
> Eager chargé directement, Lasy Chargé que quand on en as besoin

+ Comment faire que JSF et Tomcat se parlent?
> le faire dans le Web.xml (fichier de description et de deploiement)