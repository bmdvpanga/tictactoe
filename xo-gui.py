from flexx import flx

class Example(flx.Widget):


    

    def init(self):

        self.buttons = []

        #Trying to consolidate the whole function into one loop simply creates
        #1 row of 9 components.
        with flx.HSplit() as self.all:
            with flx.VSplit():
                with flx.HBox():
                    for i in range(3):
                        self.buttons[i] = flx.Button(style='background:red;', flex=1) 

                with flx.HBox():
                    for i in range(4,7):
                        self.buttons[i] = flx.Button(style='background:green;', flex=1) 

                with flx.HBox():
                    for i in range(7,10):
                        self.buttons[i] = flx.Button(style='background:blue;', flex=1) 

    #Was going to use this method to dispose of the component listening on the event
    #and replace it with a new one, but this seems to be discouraged. Especially considering the 
    #fact this is replacing the component which is listening for events
    @flx.action
    def replace_button_with_image(self):
        #self.button1 = flx.ImageWidget(flex=1, style='max-width:50px; max-height:50px', 
        #source='https://github.com/bmdvpanga/tictactoe/bob/master/images/cat.jpg?raw=true')
        for i in self.buttons:
            self.buttons[i].set_text("x")


    @flx.reaction('all.children*.pointer_click')
    def but2_clicked(self, *events):
       self.replace_button_with_image()


app = flx.App(Example)
app.export('tic-tac-toe.html', link=0)  # Export to single file
app.launch('browser')  # show it now) in a browser
flx.run()  # enter the mainloop
