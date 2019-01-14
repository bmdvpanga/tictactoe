from flexx import flx

class Example(flx.Widget):

    def init(self):
        with flx.HSplit():
            with flx.VSplit():
                with flx.HBox():
                    flx.Button(style='background:yellow;', flex=1) 
                    flx.Button(style='background:red;', flex=1) 
                    flx.Button(style='background:blue;', flex=1)
                with flx.HBox():
                    flx.Button(style='background:yellow;', flex=1) 
                    flx.Button(style='background:red;', flex=1) 
                    flx.Button(style='background:blue;', flex=1)
                with flx.HBox():
                    flx.Button(style='background:yellow;', flex=1) 
                    flx.Button(style='background:red;', flex=1) 
                    flx.Button(style='background:blue;', flex=1)

app = flx.App(Example)
app.export('example.html', link=0)  # Export to single file
app.launch('browser')  # show it now in a browser
flx.run()  # enter the mainloop